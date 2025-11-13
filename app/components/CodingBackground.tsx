'use client';

import { useEffect, useRef } from 'react';

export default function CodingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code snippets to display
    const codeSnippets = [
      'const developer = {',
      '  name: "Omar Mohamed",',
      '  skills: ["HTML", "CSS", "JS"],',
      '  passion: "coding"',
      '};',
      'function createMagic() {',
      '  return "innovation";',
      '}',
      'class Portfolio {',
      '  constructor() {',
      '    this.awesome = true;',
      '  }',
      '}',
      '<div>Hello World</div>',
      '.awesome {',
      '  color: cyan;',
      '}',
      'SELECT * FROM dreams;',
      'print("Hello Future")',
      '<?php echo "Hi!"; ?>',
      'Future<Built />'
    ];

    // Particles array
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      opacity: number;
      life: number;
    }> = [];

    // Create particle
    const createParticle = () => {
      const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        text,
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random() * 100 + 50
      };
    };

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = '#00ffff';
        ctx.font = '14px monospace';
        ctx.fillText(particle.text, particle.x, particle.y);
        ctx.restore();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = createParticle();
        }
      });

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x + ctx.measureText(p1.text).width / 2, p1.y);
            ctx.lineTo(p2.x + ctx.measureText(p2.text).width / 2, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: 'transparent' }}
    />
  );
}
