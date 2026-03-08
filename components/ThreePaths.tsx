'use client';

const paths = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L9 14L13 17L19 9L24 12" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12H24V16" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Ничего не менять',
    desc: 'Оставляешь всё как есть → продолжаешь сидеть без денег, без роста и без результата. Через месяц всё будет ровно так же, как сейчас.',
    highlight: false,
    borderClass: 'border-white/10 hover:border-white/20',
    bgClass: 'bg-[#111111]',
    titleColor: 'text-[#DC2626]',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 6V14" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="19" r="1.5" fill="#D4AF37" />
        <circle cx="14" cy="14" r="11" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Пытаться самому',
    desc: 'Метод "тыка" и бесконечных ошибок. Потратишь месяцы и деньги, а на выходе получишь лишь разочарование. Большинство на этом этапе и сливается.',
    highlight: false,
    borderClass: 'border-white/10 hover:border-white/20',
    bgClass: 'bg-[#111111]',
    titleColor: 'text-[#D4AF37]',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 14C8 14 10 10 14 10C18 10 20 14 20 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 18C8 18 10 22 14 22C18 22 20 18 20 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 10L4 8M22 10L24 8M14 6V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Дать мне помочь',
    desc: 'Я беру вас за руку, убираю все лишние шаги и показываю короткий путь к результату. Вы начинаете зарабатывать быстрее, чем думаете.',
    highlight: true,
    borderClass: 'border-[#DC2626]/40 glow-red',
    bgClass: 'bg-gradient-to-b from-[#DC2626]/15 to-[#111111]',
    titleColor: 'text-white',
  },
];

export default function ThreePaths() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[400px] rounded-full bg-[#DC2626] opacity-[0.06] blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Выбор</span>
            <div className="w-8 h-px bg-[#DC2626]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            У вас сейчас есть{' '}
            <span className="text-gradient-red">3 пути</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {paths.map((path, i) => (
            <div
              key={i}
              className={`reveal rounded-3xl border p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 ${path.bgClass} ${path.borderClass} ${path.highlight ? 'md:-mt-3 md:mb-3' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  path.highlight
                    ? 'bg-gradient-to-br from-[#DC2626] to-[#EF4444] shadow-[0_4px_20px_rgba(220,38,38,0.4)]'
                    : 'bg-white/5'
                }`}
              >
                {path.icon}
              </div>

              <div>
                <h3 className={`font-display font-bold text-lg mb-3 ${path.titleColor}`}>
                  {path.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{path.desc}</p>
              </div>

              {path.highlight && (
                <div className="mt-auto">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#DC2626]/40 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center reveal">
          <a
            href="#pricing"
            className="btn-primary inline-block px-12 py-5 rounded-2xl font-display text-base font-bold tracking-wide shadow-[0_8px_40px_rgba(220,38,38,0.5)]"
          >
            Вступить в курс →
          </a>
          <p className="font-body text-white/40 text-xs mt-4">
            Осталось несколько мест · Цена скоро вырастет
          </p>
        </div>
      </div>
    </section>
  );
}
