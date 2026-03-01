'use client';

const achievements = [
  { icon: '🏆', text: '5 лет опыта на Авито' },
  { icon: '💰', text: 'Личный оборот 3 млн+/мес' },
  { icon: '📚', text: '1200+ обученных учеников' },
  { icon: '⭐', text: 'Рейтинг 4.9/5 от студентов' },
  { icon: '🎯', text: '15+ протестированных ниш' },
  { icon: '📺', text: '50К+ подписчиков в Telegram' },
];

const results = [
  {
    name: 'Алексей К.',
    city: 'Москва',
    result: '₽180 000/мес',
    desc: 'Через 3 недели после старта курса заработал первые 80К. Сейчас стабильно 180К.',
    emoji: '🤑',
  },
  {
    name: 'Марина Л.',
    city: 'СПб',
    result: '₽95 000/мес',
    desc: 'Бывший офисный сотрудник. Теперь работаю из дома, без начальника и расписания.',
    emoji: '🙌',
  },
  {
    name: 'Дмитрий В.',
    city: 'Краснодар',
    result: '₽220 000/мес',
    desc: 'Занимаюсь дропшиппингом через Авито. Результат превзошёл все ожидания.',
    emoji: '🚀',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0066FF] opacity-5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <div className="w-8 h-px bg-[#0066FF]" />
          <span className="font-display text-xs text-[#0066FF] tracking-widest uppercase">Об авторе</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Author card */}
          <div className="reveal">
            {/* Author photo placeholder / card */}
            <div className="relative mb-8">
              <div className="gradient-border rounded-3xl p-0.5">
                <div className="card-glass rounded-3xl p-8">
                  {/* Avatar */}
                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#FF6B00] flex items-center justify-center text-3xl font-display font-black text-white">
                        АН
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-[#12121F]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">Антон Николаев</h3>
                      <p className="font-body text-sm text-white/50">Эксперт по монетизации Авито</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                        <span className="font-body text-xs text-white/40 ml-1">4.9</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-white/70 leading-relaxed text-sm mb-6">
                    Начинал с нуля в 2019 году — первые 3 месяца не мог выйти даже на 30 000 рублей. 
                    Изучил все ошибки на своей шкуре, нашёл рабочие схемы и за следующие полгода 
                    вышел на <span className="text-white font-medium">оборот 1.2 млн рублей в месяц.</span>
                  </p>
                  <p className="font-body text-white/70 leading-relaxed text-sm">
                    Сегодня я обучаю людей избегать моих ошибок и добиваться результата 
                    <span className="text-[#FF6B00] font-medium"> в 3–5 раз быстрее</span>, чем я сам.
                  </p>
                </div>
              </div>

              {/* Floating achievement */}
              <div className="absolute -top-4 -right-4 card-glass rounded-2xl px-4 py-3 border border-[#1E1E35] glow-blue">
                <div className="font-display font-black text-2xl text-gradient-blue">₽3M+</div>
                <div className="font-body text-xs text-white/50">оборот в месяц</div>
              </div>
            </div>

            {/* Achievements grid */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 card-glass rounded-xl p-3 border border-[#1E1E35] hover:border-[#0066FF]/30 transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-body text-xs text-white/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Results */}
          <div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-4 reveal">
              Результаты
              <br />
              <span className="text-gradient-orange">моих учеников</span>
            </h2>
            <p className="font-body text-white/60 mb-8 leading-relaxed reveal">
              Не слова — цифры. Каждый кейс реальный, с подтверждёнными скринами доходов.
            </p>

            <div className="flex flex-col gap-4">
              {results.map((r, i) => (
                <div
                  key={i}
                  className={`card-glass rounded-2xl p-5 border border-[#1E1E35] hover:border-[#FF6B00]/20 transition-all hover:-translate-y-0.5 reveal`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-white text-sm">{r.name}</span>
                        <span className="font-body text-xs text-white/40">{r.city}</span>
                      </div>
                      <div className="font-display font-black text-xl text-gradient-orange">{r.result}</div>
                    </div>
                    <span className="text-2xl">{r.emoji}</span>
                  </div>
                  <p className="font-body text-xs text-white/60 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
