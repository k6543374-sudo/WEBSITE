import React, { useEffect, useRef } from 'react';

interface ZeeOrbCanvasProps {
  size?: number;
  interactive?: boolean;
  className?: string;
  state?: 'idle' | 'listening' | 'thinking' | 'speaking';
}

export const ZeeOrbCanvas: React.FC<ZeeOrbCanvasProps> = ({
  size = 320,
  interactive = true,
  className = '',
  state = 'idle'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let mouseX = size / 2;
    let mouseY = size / 2;
    let targetMouseX = size / 2;
    let targetMouseY = size / 2;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const render = () => {
      time += 0.02;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;
      const baseRadius = size * 0.28;

      // Color scheme based on state
      let primaryGlow = 'rgba(0, 240, 255, ';
      let secondaryGlow = 'rgba(139, 92, 246, ';
      let accentGlow = 'rgba(236, 72, 153, ';

      if (state === 'thinking') {
        primaryGlow = 'rgba(139, 92, 246, ';
        secondaryGlow = 'rgba(236, 72, 153, ';
      } else if (state === 'listening') {
        primaryGlow = 'rgba(6, 182, 212, ';
        secondaryGlow = 'rgba(16, 185, 129, ';
      }

      // Outer radial aura
      const outerGlow = ctx.createRadialGradient(centerX, centerY, baseRadius * 0.5, centerX, centerY, baseRadius * 1.6);
      outerGlow.addColorStop(0, `${primaryGlow}0.35)`);
      outerGlow.addColorStop(0.5, `${secondaryGlow}0.15)`);
      outerGlow.addColorStop(1, 'rgba(3, 7, 18, 0)');

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Rotating Outer Rings
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.3);
      ctx.strokeStyle = `${primaryGlow}0.4)`;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-time * 0.5);
      ctx.strokeStyle = `${secondaryGlow}0.5)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 16]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Energy Core (Organic Wave Form)
      ctx.save();
      ctx.translate(centerX, centerY);

      const points = 64;
      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave1 = Math.sin(angle * 5 + time * 3) * 6;
        const wave2 = Math.cos(angle * 3 - time * 2) * 4;
        const offset = wave1 + wave2;

        const r = baseRadius + offset;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      const coreGradient = ctx.createRadialGradient(
        (mouseX - centerX) * 0.2,
        (mouseY - centerY) * 0.2,
        0,
        0,
        0,
        baseRadius * 1.2
      );
      coreGradient.addColorStop(0, '#FFFFFF');
      coreGradient.addColorStop(0.2, `${primaryGlow}0.95)`);
      coreGradient.addColorStop(0.6, `${secondaryGlow}0.8)`);
      coreGradient.addColorStop(1, `${accentGlow}0.2)`);

      ctx.fillStyle = coreGradient;
      ctx.shadowColor = `${primaryGlow}0.8)`;
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.restore();

      // Inner Floating Particles
      for (let p = 0; p < 12; p++) {
        const particleAngle = time * 0.8 + (p * Math.PI) / 6;
        const particleDist = (baseRadius * 0.6) + Math.sin(time * 2 + p) * 15;
        const px = centerX + Math.cos(particleAngle) * particleDist;
        const py = centerY + Math.sin(particleAngle) * particleDist;

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [size, interactive, state]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="max-w-full h-auto cursor-pointer filter drop-shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};
