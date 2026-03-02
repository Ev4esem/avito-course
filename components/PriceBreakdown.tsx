'use client';

const items = [
  { label: 'Заработок на продвижении через нейросети', price: '15 000' },
  { label: 'Поиск клиентов и продажи', price: '15 000' },
  { label: 'Личный бренд с нуля', price: '15 000' },
  { label: 'Ораторское мастерство', price: '10 000' },
  { label: 'Монтаж Reels', price: '10 000' },
  { label: 'Два месяца обратной связи от Адама', price: '25 000' },
];

export default function PriceBreakdown() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#DC2626] opacity-5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#D4AF37] opacity-5 blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Стоимость</span>
            <div className="w-8 h-px bg-[#DC2626]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            Сколько всё это{' '}
            <span className="text-gradient-red">стоит?</span>
          </h2>
        </div>

        {/* Price list card */}
        <div className="reveal card-glass rounded-3xl overflow-hidden border border-white/10">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-6 py-5 gap-4 ${
                i !== items.length - 1 ? 'border-b border-white/[0.06]' : ''
              } group hover:bg-white/[0.02] transition-colors`}
            >
              <div className="flex items-center gap-4">
                {/* Checkbox */}
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#EF4444] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                    <path d="M1.5 5.5L5 9L12.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-body text-white/80 text-sm md:text-base leading-snug">{item.label}</span>
              </div>
              <span className="font-display font-black text-white text-base md:text-lg flex-shrink-0">
                {item.price} <span className="text-white/50 text-sm font-normal">₽</span>
              </span>
            </div>
          ))}

          {/* Total */}
          <div className="px-6 py-5 bg-gradient-to-r from-[#DC2626]/15 to-[#D4AF37]/10 border-t border-[#DC2626]/20 flex items-center justify-between">
            <span className="font-display font-black text-white text-lg">ИТОГО:</span>
            <span className="font-display font-black text-2xl md:text-3xl text-gradient-gold">90 000 ₽</span>
          </div>
        </div>

        {/* Discount block */}
        <div className="mt-8 reveal">
          <div className="rounded-3xl border border-[#DC2626]/30 bg-[#DC2626]/5 px-6 py-8 text-center">
            <p className="font-body text-white/70 text-base md:text-lg mb-3 leading-relaxed">
              Но я понимаю, что не каждый может позволить себе этот пакет за{' '}
              <span className="text-white/40 line-through">90 000 ₽</span>...
            </p>
            <p className="font-body text-white/80 text-base md:text-lg mb-4 leading-relaxed">
              Поэтому я решил снизить цену на целых{' '}
              <span className="text-[#DC2626] font-bold">67%</span>!{' '}
              Это скидка аж на{' '}
              <span className="text-[#DC2626] font-bold">60 000 рублей</span>!
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] shadow-[0_8px_40px_rgba(220,38,38,0.4)]">
              <span className="font-display font-black text-white text-lg md:text-xl">Сейчас всего</span>
              <span className="font-display font-black text-white text-2xl md:text-3xl">29 990 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
