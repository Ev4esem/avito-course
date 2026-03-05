'use client';

const modules = [
  {
    number: '01',
    title: 'Выбор прибыльной ниши',
    desc: 'Найдёшь нишу с высоким спросом и минимальной конкуренцией. Покажу 15 проверенных категорий с реальными цифрами маржи.',
    topics: ['Анализ спроса через статистику', 'ТОП-15 прибыльных ниш', 'Расчёт юнит-экономики'],
    color: '#DC2626',
  },
  {
    number: '02',
    title: 'Создание продающих объявлений',
    desc: 'Объявление — это твой менеджер по продажам. Научу писать тексты, делать фото и выставлять цену, которые конвертируют.',
    topics: ['Формулы продающих заголовков', 'Фотосъёмка для Авито', 'A/B тесты объявлений'],
    color: '#D4AF37',
  },
  {
    number: '03',
    title: 'Продвижение и алгоритмы',
    desc: 'Как работает поисковый алгоритм Авито и как попасть в топ без лишних затрат на рекламу.',
    topics: ['SEO-оптимизация объявлений', 'Бесплатные методы продвижения', 'Платная реклама с ROI 300%+'],
    color: '#EF4444',
  },
  {
    number: '04',
    title: 'Дропшиппинг и масштаб',
    desc: 'Продавай без товара. Схемы работы с поставщиками, автоматизация и делегирование — вплоть до пассивного дохода.',
    topics: ['Поиск надёжных поставщиков', 'Автоматизация рутины', 'Построение команды'],
    color: '#D4AF37',
  },
  {
    number: '05',
    title: 'Работа с покупателями',
    desc: 'Скрипты переговоров, работа с возражениями, как делать апселл и получать 5-звёздочные отзывы.',
    topics: ['Скрипты продаж', 'Работа с отзывами', 'Повторные продажи'],
    color: '#DC2626',
  },
  {
    number: '06',
    title: 'Финансы и учёт',
    desc: 'Как правильно считать доход, минимизировать налоги, работать с ИП или самозанятостью.',
    topics: ['Самозанятость vs ИП', 'Таблица учёта доходов', 'Оптимизация расходов'],
    color: '#D4AF37',
  },
];

export default function WhatYouLearn() {
  return (
    <section id="learn" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#DC2626] opacity-5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Программа курса</span>
            <div className="w-8 h-px bg-[#DC2626]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-4 reveal">
            Чему ты
            <br />
            <span className="text-gradient-red">научишься</span>
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto reveal">
            6 модулей с практическими заданиями и живой проверкой куратора.
            Без воды — только то, что реально работает в 2025 году.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module, i) => (
            <div
              key={i}
              className="group card-glass rounded-3xl p-6 border border-[#1E1E1E] hover:border-[#2E2E2E] transition-all duration-300 hover:-translate-y-1 reveal relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-3xl transition-opacity duration-300 group-hover:opacity-10"
                style={{ background: module.color }}
              />

              {/* Number */}
              <div className="font-display font-black text-5xl opacity-10 text-white mb-3">{module.number}</div>

              {/* Color indicator */}
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ background: module.color }}
              />

              {/* Content */}
              <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">{module.title}</h3>
              <p className="font-body text-sm text-white/55 leading-relaxed mb-4">{module.desc}</p>

              {/* Topics */}
              <div className="flex flex-col gap-2">
                {module.topics.map((topic, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: module.color }}
                    />
                    <span className="font-body text-xs text-white/50">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="#pricing"
            className="btn-primary inline-block px-10 py-4 rounded-2xl font-display text-base font-bold tracking-wide shadow-[0_8px_40px_rgba(220,38,38,0.5)]"
          >
            Занять место →
          </a>
          <p className="font-body text-white/40 text-xs mt-4">Старт ближайшего потока — уже скоро</p>
        </div>
      </div>
    </section>
  );
}
