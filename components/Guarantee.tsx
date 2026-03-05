'use client';

const guarantees = [
  {
    num: '1',
    accent: '#DC2626',
    title: '100% гарантия возврата денег (3 дня)',
    body: [
      'Если в течение первых 3 дней ты понимаешь, что формат, подача или программа тебе не подходят — я делаю полный возврат средств без лишних вопросов и разбирательств.',
      'Без скрытых условий. Без давления. Без «попробуй ещё».',
      'Ты принимаешь решение — я возвращаю деньги.',
    ],
  },
  {
    num: '2',
    accent: '#D4AF37',
    title: 'Гарантия окупаемости во время обучения',
    body: [
      'Моя задача — не просто дать информацию, а довести тебя до результата.',
      'Если ты выполняешь все рекомендации, внедряешь стратегии и следуешь системе, но не выходишь на результат и не окупаешь обучение — я делаю полный возврат средств.',
      'Мне важно твоё реальное достижение, а не просто факт прохождения программы.',
    ],
  },
];

export default function Guarantee() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37] opacity-[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#DC2626] opacity-[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="font-display text-xs text-[#D4AF37] tracking-widest uppercase">Гарантии</span>
            <div className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="font-display font-black text-2xl md:text-5xl text-white leading-tight mb-4">
            Я полностью уверен в качестве{' '}
            <span className="text-gradient-gold">своего обучения</span>
          </h2>
          <p className="font-body text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Я уверен в тех инструментах, которые даю. Именно поэтому{' '}
            <span className="text-white/90 font-semibold">все риски я беру на себя.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Photo placeholder */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative h-full min-h-[360px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-white/10 flex items-center justify-center">
              {/* Placeholder */}
              <div className="flex flex-col items-center justify-center gap-4 opacity-25">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect x="1" y="1" width="62" height="62" rx="12" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="32" cy="26" r="10" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M12 52c0-11 9-18 20-18s20 7 20 18" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="font-display text-xs text-[#D4AF37] tracking-widest uppercase">Фото автора</span>
              </div>

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#D4AF37]/30 w-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M9 1L2 5V10C2 15.5 5.8 19.7 9 21C12.2 19.7 16 15.5 16 10V5L9 1Z" fill="#0A0A0A" />
                      <path d="M6 10L8 12L12 8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-black text-white text-sm">Ты ничем не рискуешь</div>
                    <div className="font-body text-white/50 text-xs">Репутация и деньги — моя ответственность</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            {guarantees.map((g, i) => (
              <div
                key={i}
                className="reveal card-glass rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: g.accent + '30',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {/* Number + title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${g.accent}, ${g.accent}99)` }}
                  >
                    <span className="font-display font-black text-white text-base">{g.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base md:text-lg leading-snug pt-1">
                    {g.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-3 pl-14">
                  {g.body.map((line, j) => (
                    <p key={j} className="font-body text-white/65 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="reveal text-center">
          <div className="inline-block card-glass rounded-2xl border border-[#DC2626]/20 px-8 py-5 mb-10">
            <p className="font-display font-bold text-white text-base md:text-lg">
              Я отвечаю за качество продукта своей{' '}
              <span className="text-gradient-red">репутацией и деньгами.</span>
            </p>
          </div>
          <div>
            <a
              href="#pricing"
              className="btn-primary inline-block px-10 py-4 rounded-2xl font-display text-base font-bold tracking-wide shadow-[0_8px_40px_rgba(220,38,38,0.5)]"
            >
              Занять место →
            </a>
            <p className="font-body text-white/40 text-xs mt-4">Без рисков — с гарантией возврата</p>
          </div>
        </div>
      </div>
    </section>
  );
}
