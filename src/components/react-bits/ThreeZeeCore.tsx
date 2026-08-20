import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ZeeOrbCanvas } from '../ZeeOrbCanvas';

interface ThreeZeeCoreProps {
  size?: number;
  state?: 'idle' | 'listening' | 'thinking' | 'speaking';
  className?: string;
}

export const ThreeZeeCore: React.FC<ThreeZeeCoreProps> = ({
  size = 350,
  state = 'idle',
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      // Scene Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      camera.position.z = 6;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false });
      renderer.setSize(size, size);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      let primaryHex = 0x00f0ff;
      let secondaryHex = 0x8b5cf6;

      if (state === 'thinking') {
        primaryHex = 0x8b5cf6;
        secondaryHex = 0xec4899;
      } else if (state === 'listening') {
        primaryHex = 0x10b981;
        secondaryHex = 0x06b6d4;
      }

      // 1. Core Geodesic Wireframe Globe
      const globeGeo = new THREE.IcosahedronGeometry(1.4, 2);
      const globeMat = new THREE.MeshBasicMaterial({
        color: primaryHex,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const globeMesh = new THREE.Mesh(globeGeo, globeMat);
      scene.add(globeMesh);

      // 2. Inner Solid Glowing Sphere
      const innerGeo = new THREE.SphereGeometry(0.9, 32, 32);
      const innerMat = new THREE.MeshPhongMaterial({
        color: primaryHex,
        emissive: secondaryHex,
        emissiveIntensity: 0.6,
        shininess: 100,
        transparent: true,
        opacity: 0.85
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      scene.add(innerMesh);

      // 3. Dual 3D Torus Orbital Rings
      const ring1Geo = new THREE.TorusGeometry(2.1, 0.025, 16, 100);
      const ring1Mat = new THREE.MeshBasicMaterial({ color: primaryHex, transparent: true, opacity: 0.8 });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = Math.PI / 3;
      scene.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
      const ring2Mat = new THREE.MeshBasicMaterial({ color: secondaryHex, transparent: true, opacity: 0.6 });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.y = Math.PI / 4;
      scene.add(ring2);

      // 4. Floating 3D Electron Nodes
      const nodesGroup = new THREE.Group();
      const nodeGeo = new THREE.SphereGeometry(0.06, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

      for (let i = 0; i < 12; i++) {
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        const angle = (i / 12) * Math.PI * 2;
        node.position.x = Math.cos(angle) * 2.1;
        node.position.z = Math.sin(angle) * 2.1;
        nodesGroup.add(node);
      }
      nodesGroup.rotation.x = Math.PI / 3;
      scene.add(nodesGroup);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(primaryHex, 2, 20);
      pointLight.position.set(3, 3, 3);
      scene.add(pointLight);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = mount.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX = (x / rect.width) * 0.8;
        mouseY = (y / rect.height) * 0.8;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const clock = new THREE.Clock();

      const animate = () => {
        if (!renderer) return;
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        globeMesh.rotation.y = elapsedTime * 0.4 + targetX;
        globeMesh.rotation.x = elapsedTime * 0.2 + targetY;

        const pulseScale = 1 + Math.sin(elapsedTime * 3) * 0.08;
        innerMesh.scale.set(pulseScale, pulseScale, pulseScale);

        ring1.rotation.z = elapsedTime * 0.5;
        ring2.rotation.z = -elapsedTime * 0.7;
        nodesGroup.rotation.z = elapsedTime * 0.5;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        if (mount && renderer && renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        globeGeo.dispose();
        globeMat.dispose();
        innerGeo.dispose();
        innerMat.dispose();
        ring1Geo.dispose();
        ring1Mat.dispose();
        ring2Geo.dispose();
        ring2Mat.dispose();
        nodeGeo.dispose();
        nodeMat.dispose();
        if (renderer) renderer.dispose();
      };
    } catch {
      // Fallback to 2D Canvas ZeeOrb rendering if WebGL context creation fails
      setWebGlSupported(false);
    }
  }, [size, state]);

  if (!webGlSupported) {
    return <ZeeOrbCanvas size={size} interactive={true} state={state} className={className} />;
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div ref={mountRef} className="cursor-pointer filter drop-shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-transform duration-300 hover:scale-105" />
    </div>
  );
};
