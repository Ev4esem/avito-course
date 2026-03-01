'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '#DC2626' : '#D4AF37',
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#DC2626] opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37] opacity-10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 sm:pt-20">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#DC2626]/30 bg-[#DC2626]/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-xs font-body text-[#DC2626] font-medium tracking-wide">
              Набор открыт · Осталось 12 мест
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-black leading-[0.95] mb-6">
          <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-gradient-white mb-2">
            Зарабатывай на
          </span>
          <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-gradient-red">
            Авито
          </span>
          <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-gradient-white">
            от 100 000 ₽/мес
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Практический курс с живым наставником. Реальные схемы, конкретные ниши
          и пошаговый план — от нуля до стабильного дохода за 21 день.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#apply"
            className="btn-primary px-8 py-4 rounded-2xl font-display text-sm font-bold tracking-wide inline-block text-center"
          >
            Оставить заявку на курс →
          </a>
          <a
            href="#learn"
            className="px-8 py-4 rounded-2xl font-display text-sm font-bold tracking-wide border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all inline-block text-center"
          >
            Смотреть программу
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-xs text-white/60">Листать</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
