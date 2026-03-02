'use client';

export default function Guarantee() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37] opacity-[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#DC2626] opacity-[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/5 to-[#111111] grid md:grid-cols-2 gap-0">

          {/* Photo placeholder */}
          <div className="relative min-h-[360px] md:min-h-[480px] bg-gradient-to-br from-[#1A1A1A] to-[#111111] flex items-center justify-center overflow-hidden">
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-30">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <rect x="1" y="1" width="62" height="62" rx="12" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="32" cy="26" r="10" stroke="#D4AF37" strokeWidth="1.5" />
                <path d="M12 52c0-11 9-18 20-18s20 7 20 18" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-display text-xs text-[#D4AF37] tracking-widest uppercase">Фото автора</span>
            </div>

            {/* Badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#D4AF37]/30">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1L11.06 6.26L17 7.27L13 11.14L13.99 17L9 14.27L4.01 17L5 11.14L1 7.27L6.94 6.26L9 1Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="0.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-black text-white text-sm">100% гарантия</div>
                  <div className="font-body text-white/50 text-xs">возврата денег · 3 дня</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center px-8 md:px-12 py-12 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="font-display text-xs text-[#D4AF37] tracking-widest uppercase">Гарантия</span>
            </div>

            <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-6">
              К тому же я даю{' '}
              <span className="text-gradient-gold">100% гарантию</span>{' '}
              возврата денег
            </h2>

            <div className="flex flex-col gap-5 font-body text-white/70 text-base leading-relaxed">
              <p>
                Я так уверен в качестве своих продуктов, что даю тебе гарантию{' '}
                <span className="text-[#D4AF37] font-semibold">100% возврата денег (на 3 дня)! БЕЗ ВОПРОСОВ!</span>
              </p>
              <p>
                Если тебе не понравится продукт и ты не увидишь в нём никакой ценности —{' '}
                <span className="text-white/90">ты сможешь вернуть свои деньги!</span>
              </p>
              <p>
                Я хочу продать только тем, кто действительно останется довольным! Все риски за качество своих продуктов я всегда беру на себя!
              </p>
            </div>

            {/* Shield icon row */}
            <div className="mt-8 flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M10 1L2 5V10C2 15.5 5.8 20.7 10 22C14.2 20.7 18 15.5 18 10V5L10 1Z" stroke="#D4AF37" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M7 11L9 13L13 9" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#D4AF37] text-sm">Защищённая покупка</div>
                <div className="font-body text-white/50 text-xs">Возврат без вопросов в течение 3 дней</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
