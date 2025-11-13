'use client';

import { useEffect, useRef } from 'react';

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-indigo-500 rounded-full opacity-60';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      particle.style.animationName = 'float';
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
