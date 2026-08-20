import React from 'react';

interface Grid3DBackgroundProps {
  className?: string;
}

export const Grid3DBackground: React.FC<Grid3DBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {/* 3D Perspective Plane */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute -inset-[100%] bg-[linear-gradient(to_right,#00f0ff15_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            transform: 'rotateX(75deg) translateY(-20%) translateZ(-100px)',
            maskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,1) 40%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,1) 40%, transparent 90%)'
          }}
        />
      </div>

      {/* Cyber Horizon Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm" />
    </div>
  );
};
