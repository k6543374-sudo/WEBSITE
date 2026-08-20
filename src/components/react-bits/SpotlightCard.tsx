import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  tiltEffect?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(0, 240, 255, 0.25)',
  tiltEffect = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);

    if (tiltEffect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg tilt
      const rotateY = ((x - centerX) / centerX) * 8;
      setTilt({ rotateX, rotateY });
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(0px)`,
        transition: opacity === 0 ? 'transform 0.5s ease-out, border-color 0.3s ease' : 'none'
      }}
      className={`relative glass-panel rounded-3xl border border-white/10 overflow-hidden transform-gpu group ${className}`}
    >
      {/* 3D Cursor Spotlight Highlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
        }}
      />

      {/* 3D Border Glow Trace */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-500/0 group-hover:border-cyan-400/40 transition-colors duration-300 z-20"
      />

      <div className="relative z-30">{children}</div>
    </div>
  );
};
