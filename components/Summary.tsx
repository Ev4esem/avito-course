'use client';

const points = [
  {
    num: '01',
    title: 'Вся правда про заработок в интернете',
    desc: 'Самые распространённые ошибки, из-за которых вы сольёте кучу времени и денег на другие способы заработка и останетесь ни с чем',
  },
  {
    num: '02',
    title: 'Как получать деньги работая ПРОСТО и БЕЗ НАПРЯГА',
    desc: 'Через нейросети, тратя на это несколько часов в день',
  },
  {
    num: '03',
    title: 'Секретный способ начать зарабатывать прямо СЕЙЧАС',
    desc: 'Даже не уходя с работы, уделяя всего два часа в неделю',
  },
  {
    num: '04',
    title: 'Список различий между моей системой',
    desc: 'И устаревшими способами заработка в онлайн, которые уже не работают',
  },
];

export default function Summary() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#DC2626] opacity-[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Итог</span>
            <div className="w-8 h-px bg-[#DC2626]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-6">
            Подведём <span className="text-gradient-red">итог</span>
          </h2>

          {/* Main summary card */}
          <div className="card-glass rounded-3xl border border-white/10 px-8 py-7 text-left">
            <p className="font-body text-white/85 text-base md:text-lg leading-relaxed">
              Это идеальный источник дохода из интернета для новичков, студентов,
              работников в найме, который позволяет зарабатывать от{' '}
              <span className="text-gradient-red font-bold text-xl">100 000 ₽/мес</span>
            </p>
          </div>

          <p className="font-body text-white/60 text-base mt-5">
            И я действительно верю, что <span className="text-white/90 font-semibold">ВЫ</span> тоже сможете использовать эту систему
          </p>
        </div>

        {/* Subheading */}
        <p className="font-display font-bold text-[#DC2626] text-base md:text-lg mb-6 reveal">
          Вот лишь маленькая часть того, что находится внутри тест-драйва:
        </p>

        {/* Points grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {points.map((point, i) => (
            <div
              key={i}
              className="reveal card-glass rounded-2xl border border-white/10 p-6 hover:border-[#DC2626]/30 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-4 items-start">
                <span className="font-display font-black text-[#DC2626]/30 text-3xl leading-none group-hover:text-[#DC2626]/50 transition-colors">
                  {point.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-white text-sm md:text-base leading-snug mb-2">
                    {point.title}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
