import React from 'react';

interface AuroraBackgroundProps {
  className?: string;
}

/**
 * Slow-drifting aurora gradient blobs. Place inside a relative,
 * overflow-hidden container behind the content.
 */
export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`} aria-hidden="true">
      <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-cyan-500/15 blur-[120px] animate-aurora-1" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-600/15 blur-[120px] animate-aurora-2" />
      <div className="absolute -bottom-40 left-1/3 w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 blur-[120px] animate-aurora-3" />
    </div>
  );
};
