'use client';

const steps = [
  {
    num: '1',
    title: 'Осваиваете нейросети и услугу',
    desc: 'Разбираетесь в инструментах и понимаете, как создавать ценность для клиентов',
  },
  {
    num: '2',
    title: 'Учитесь находить и закрывать клиентов',
    desc: 'Получаете рабочие скрипты продаж и стратегии поиска первых заказчиков',
  },
  {
    num: '3',
    title: 'Создаёте и прокачиваете личный бренд',
    desc: 'Выстраиваете образ эксперта, который притягивает клиентов сам',
  },
  {
    num: '4',
    title: 'Убираете страх продаж и камеры',
    desc: 'Прокачиваете речь и психологию влияния — становитесь уверенными в любых переговорах',
  },
  {
    num: '5',
    title: 'Осваиваете монтаж Reels',
    desc: 'Создаёте вирусный контент, который работает на вас 24/7 и привлекает новых клиентов',
  },
];

export default function ProgramLogic() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#DC2626] opacity-[0.04] blur-[160px] pointer-events-none" />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Программа</span>
            <div className="w-8 h-px bg-[#DC2626]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            Итоговая{' '}
            <span className="text-gradient-red">логика</span>{' '}
            программы
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={i} className="reveal flex flex-col items-center" style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Step card */}
              <div className="w-full flex items-center gap-5 card-glass rounded-2xl px-6 py-5 border border-white/10 hover:border-[#DC2626]/30 transition-all duration-300 group">
                {/* Number badge */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DC2626] to-[#EF4444] flex items-center justify-center shadow-[0_4px_20px_rgba(220,38,38,0.4)] group-hover:shadow-[0_4px_30px_rgba(220,38,38,0.6)] transition-shadow">
                    <span className="font-display font-black text-white text-xl">{step.num}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-bold text-white text-base md:text-lg leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center py-2 opacity-40">
                  <div className="w-px h-4 bg-gradient-to-b from-[#DC2626] to-transparent" />
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
