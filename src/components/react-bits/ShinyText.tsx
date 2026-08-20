import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = '',
}) => {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-cyan-400 via-purple-300 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_4s_linear_infinite] ${className}`}
      style={{
        backgroundImage: 'linear-gradient(110deg, #00F0FF 20%, #FFFFFF 40%, #8B5CF6 60%, #00F0FF 80%)',
        backgroundSize: '200% auto'
      }}
    >
      {text}
    </span>
  );
};
