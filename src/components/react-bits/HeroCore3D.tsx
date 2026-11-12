import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroCore3DProps {
  className?: string;
  variant?: 'hero' | 'orb';
  size?: number;
}

/**
 * Futuristic 3D core: wireframe geodesic globe, glowing inner core,
 * orbital rings and a drifting particle field. `hero` fills its parent
 * and adds mouse parallax; `orb` renders a fixed-size square canvas.
 * Fails silently when WebGL is unavailable (background stays empty).
 */
export const HeroCore3D: React.FC<HeroCore3DProps> = ({
  className = '',
  variant = 'hero',
  size = 320
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId = 0;
    let disposed = false;

    try {
      const isHero = variant === 'hero';
      const width = isHero ? mount.clientWidth : size;
      const height = isHero ? mount.clientHeight : size;

      // Phones get a lighter scene; reduced-motion users get a still frame.
      const isSmallScreen = window.innerWidth < 768;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const parallaxEnabled = isHero && !isSmallScreen && !prefersReduced;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.z = isHero ? 7 : 6;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isSmallScreen, powerPreference: 'low-power' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      const primary = 0x00f0ff;
      const secondary = 0x8b5cf6;
      const accent = 0xec4899;

      // Wireframe geodesic globe
      const globeGeo = new THREE.IcosahedronGeometry(1.6, 2);
      const globeMat = new THREE.MeshBasicMaterial({
        color: primary,
        wireframe: true,
        transparent: true,
        opacity: 0.32
      });
      const globe = new THREE.Mesh(globeGeo, globeMat);
      scene.add(globe);

      // Inner glowing core
      const coreGeo = new THREE.SphereGeometry(1.0, 32, 32);
      const coreMat = new THREE.MeshPhongMaterial({
        color: primary,
        emissive: secondary,
        emissiveIntensity: 0.7,
        shininess: 90,
        transparent: true,
        opacity: 0.85
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      scene.add(core);

      // Orbital rings
      const rings: THREE.Mesh[] = [];
      const ringSpecs: Array<[number, number, number, number]> = [
        [2.3, 0.02, primary, 0.7],
        [2.7, 0.012, secondary, 0.5],
        [3.1, 0.008, accent, 0.35]
      ];
      ringSpecs.forEach(([radius, tube, color, opacity], i) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(radius, tube, 16, 120),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity })
        );
        ring.rotation.x = Math.PI / (2.4 + i * 0.5);
        ring.rotation.y = i * 0.6;
        scene.add(ring);
        rings.push(ring);
      });

      // Particle field
      const particleCount = isHero ? (isSmallScreen ? 260 : 700) : (isSmallScreen ? 120 : 250);
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const r = 4 + Math.random() * 10;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: primary,
        size: 0.035,
        transparent: true,
        opacity: 0.7
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));
      const pointLight = new THREE.PointLight(primary, 30, 50);
      pointLight.position.set(4, 4, 6);
      scene.add(pointLight);
      const pointLight2 = new THREE.PointLight(secondary, 20, 50);
      pointLight2.position.set(-5, -3, 4);
      scene.add(pointLight2);

      // Mouse parallax (hero only)
      let targetX = 0;
      let targetY = 0;
      const handleMouseMove = (e: MouseEvent) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      if (parallaxEnabled) window.addEventListener('mousemove', handleMouseMove);

      const clock = new THREE.Clock();
      const animate = () => {
        if (disposed || !renderer) return;
        const t = clock.getElapsedTime();

        globe.rotation.y = t * 0.15;
        globe.rotation.x = Math.sin(t * 0.2) * 0.15;
        core.rotation.y = -t * 0.1;
        const pulse = 1 + Math.sin(t * 1.6) * 0.04;
        core.scale.set(pulse, pulse, pulse);

        rings.forEach((ring, i) => {
          ring.rotation.z = t * (0.12 + i * 0.05) * (i % 2 === 0 ? 1 : -1);
        });

        particles.rotation.y = t * 0.02;

        if (isHero) {
          camera.position.x += (targetX * 0.6 - camera.position.x) * 0.03;
          camera.position.y += (-targetY * 0.4 - camera.position.y) * 0.03;
          camera.lookAt(0, 0, 0);
        }

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };
      if (prefersReduced) {
        // Static render only: no animation loop for reduced-motion users.
        renderer.render(scene, camera);
      } else {
        animate();
      }

      const handleResize = () => {
        if (!renderer || !isHero) return;
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        disposed = true;
        cancelAnimationFrame(animationFrameId);
        if (parallaxEnabled) window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (renderer) {
          if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
          renderer.dispose();
        }
        globeGeo.dispose();
        globeMat.dispose();
        coreGeo.dispose();
        coreMat.dispose();
        rings.forEach((ring) => {
          ring.geometry.dispose();
          (ring.material as THREE.Material).dispose();
        });
        particleGeo.dispose();
        particleMat.dispose();
      };
    } catch {
      // WebGL unavailable: the gradient background still carries the design.
      return undefined;
    }
  }, [variant, size]);

  return (
    <div
      ref={mountRef}
      className={`${variant === 'hero' ? 'absolute inset-0' : ''} ${className}`}
      style={variant === 'orb' ? { width: size, height: size } : undefined}
      aria-hidden="true"
    />
  );
};
