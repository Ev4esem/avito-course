export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#1E1E35]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#FF6B00] flex items-center justify-center">
            <span className="font-display text-xs font-bold text-white">АП</span>
          </div>
          <span className="font-display text-sm font-bold text-white">
            Авито<span className="text-gradient-orange">Про</span>
          </span>
        </div>
        <p className="font-body text-xs text-white/30 text-center">
          © 2025 АвитоПро. Все права защищены.
        </p>
        <div className="flex gap-4">
          <a href="#" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">
            Политика конфиденциальности
          </a>
          <a href="#" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">
            Оферта
          </a>
        </div>
      </div>
    </footer>
  );
}
