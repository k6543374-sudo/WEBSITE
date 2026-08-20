import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 180,
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        mount.clientWidth / mount.clientHeight || 1,
        0.1,
        1000
      );
      camera.position.z = 15;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false });
      renderer.setSize(mount.clientWidth || window.innerWidth, mount.clientHeight || window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      // Particle geometry
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const cyanColor = new THREE.Color('#00F0FF');
      const purpleColor = new THREE.Color('#8B5CF6');
      const blueColor = new THREE.Color('#3B82F6');

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 35;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

        const mixedColor = i % 3 === 0 ? cyanColor : i % 3 === 1 ? purpleColor : blueColor;
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Particle material
      const material = new THREE.PointsMaterial({
        size: 0.35,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Connecting lines between close particles
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.15
      });

      const lineGeometry = new THREE.BufferGeometry();
      const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const handleResize = () => {
        if (!mount || !renderer) return;
        camera.aspect = (mount.clientWidth || window.innerWidth) / (mount.clientHeight || window.innerHeight);
        camera.updateProjectionMatrix();
        renderer.setSize(mount.clientWidth || window.innerWidth, mount.clientHeight || window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      const clock = new THREE.Clock();

      const animate = () => {
        if (!renderer) return;
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        particles.rotation.y = elapsedTime * 0.05 + targetX * 0.2;
        particles.rotation.x = elapsedTime * 0.03 + targetY * 0.2;

        const posArr = geometry.attributes.position.array as Float32Array;
        const linePositions: number[] = [];

        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const dx = posArr[i * 3] - posArr[j * 3];
            const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
            const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 4.5) {
              linePositions.push(posArr[i * 3], posArr[i * 3 + 1], posArr[i * 3 + 2]);
              linePositions.push(posArr[j * 3], posArr[j * 3 + 1], posArr[j * 3 + 2]);
            }
          }
        }

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (mount && renderer && renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        lineMaterial.dispose();
        if (renderer) renderer.dispose();
      };
    } catch {
      // Graceful fallback if WebGL context is disabled or un-supported
      return;
    }
  }, [particleCount]);

  return <div ref={mountRef} className={`absolute inset-0 pointer-events-none z-0 ${className}`} />;
};
