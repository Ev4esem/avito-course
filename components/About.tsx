'use client';

const achievements = [
  { icon: '🏆', text: 'Предприниматель с нуля' },
  { icon: '💰', text: 'Доход 300 000 ₽+/мес' },
  { icon: '📚', text: 'Опыт в обучении учеников' },
  { icon: '🎯', text: 'Результат в 3–5 раз быстрее' },
  { icon: '🔥', text: 'Только практика и реальные схемы' },
  { icon: '🚀', text: 'Ушёл из найма благодаря Авито' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#DC2626] opacity-5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37] opacity-[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 reveal">
          <div className="w-8 h-px bg-[#DC2626]" />
          <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Об авторе</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Author card */}
          <div className="reveal">
            <div className="gradient-border rounded-3xl p-0.5 mb-6">
              <div className="card-glass rounded-3xl p-8">
                {/* Avatar */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#DC2626] to-[#D4AF37] flex items-center justify-center text-3xl font-display font-black text-white">
                      А
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-[#111111]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Ахмад</h3>
                    <p className="font-body text-sm text-white/50">Предприниматель · Наставник по Авито</p>
                  </div>
                </div>

                <p className="font-body text-white/70 leading-relaxed text-sm mb-4">
                  Начал с полного нуля — без опыта, связей и капитала. Самостоятельно изучил площадку,
                  протестировал десятки подходов, прошёл через ошибки и сливы бюджета, нашёл рабочие
                  схемы и после этого{' '}
                  <span className="text-white font-medium">полностью ушёл из найма.</span>
                </p>
                <p className="font-body text-white/70 leading-relaxed text-sm">
                  Сегодня обучаю людей запускаться и зарабатывать на Авито, помогая им приходить к
                  результату в{' '}
                  <span className="text-[#DC2626] font-medium">3–5 раз быстрее</span>, чем когда-то пришёл я.
                  Я не даю теорию — только практику, проверенные стратегии и пошаговые действия,
                  которые приводят к реальным деньгам.
                </p>
              </div>
            </div>

            {/* Achievements grid */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 card-glass rounded-xl p-3 border border-[#1E1E1E] hover:border-[#DC2626]/30 transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-body text-xs text-white/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Story */}
          <div className="reveal">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-8">
              Кто <span className="text-gradient-red">я</span>
            </h2>


            <div className="flex flex-col gap-6">
              <div className="card-glass rounded-2xl border border-white/10 p-6 hover:border-[#DC2626]/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DC2626] text-sm">01</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-sm">Предприниматель и наставник</h4>
                </div>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  Я предприниматель и наставник по заработку на Авито. Начал с полного нуля — без опыта,
                  связей и капитала. Самостоятельно изучил площадку, нашёл рабочие схемы и ушёл из найма.
                </p>
              </div>

              <div className="card-glass rounded-2xl border border-white/10 p-6 hover:border-[#DC2626]/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#D4AF37] text-sm">02</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-sm">Мои результаты</h4>
                </div>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  Вышел на стабильный доход{' '}
                  <span className="text-gradient-gold font-bold">300 000 ₽+</span> в месяц и выстроил понятную,
                  системную модель заработка. Сегодня обучаю людей запускаться и зарабатывать на Авито.
                </p>
              </div>

              <div className="card-glass rounded-2xl border border-white/10 p-6 hover:border-[#DC2626]/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DC2626] text-sm">03</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-sm">Только практика</h4>
                </div>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  Я не даю теорию — только практику, проверенные стратегии и пошаговые действия,
                  которые приводят к реальным деньгам.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="#pricing"
            className="btn-primary inline-block px-10 py-4 rounded-2xl font-display text-base font-bold tracking-wide shadow-[0_8px_40px_rgba(220,38,38,0.5)]"
          >
            Занять место →
          </a>
        </div>
      </div>
    </section>
  );
}
