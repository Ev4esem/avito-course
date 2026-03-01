'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#about', label: 'Об авторе' },
    { href: '#learn', label: 'Программа' },
    { href: '#pricing', label: 'Тарифы' },
    { href: '#apply', label: 'Заявка' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#0A0A14]/95 backdrop-blur-xl border-b border-[#1E1E35]' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#FF6B00] flex items-center justify-center">
            <span className="font-display text-xs font-bold text-white">АП</span>
          </div>
          <span className="font-display text-sm font-bold text-white">
            Авито<span className="text-gradient-orange">Про</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-body"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#apply"
          className="hidden md:block btn-primary px-5 py-2.5 rounded-xl font-display text-xs font-bold tracking-wide"
        >
          Оставить заявку →
        </a>

        {/* Burger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 bg-[#0A0A14]/95 backdrop-blur-xl border-t border-[#1E1E35]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white font-body transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMenuOpen(false)}
            className="btn-primary px-5 py-3 rounded-xl font-display text-xs font-bold text-center tracking-wide"
          >
            Оставить заявку →
          </a>
        </div>
      </div>
    </nav>
  );
}
