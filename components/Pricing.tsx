'use client';

const plans = [
  {
    name: 'Старт',
    price: '9 900',
    oldPrice: '19 900',
    desc: 'Для тех, кто хочет попробовать и разобраться в основах',
    color: '#6B6B8A',
    popular: false,
    features: [
      { text: 'Доступ к 6 модулям курса', included: true },
      { text: 'Видеоуроки + конспекты', included: true },
      { text: 'Шаблоны объявлений', included: true },
      { text: 'Закрытый чат студентов', included: false },
      { text: 'Проверка домашних заданий', included: false },
      { text: 'Личная консультация с автором', included: false },
      { text: 'Поддержка 3 месяца', included: false },
    ],
  },
  {
    name: 'Практик',
    price: '24 900',
    oldPrice: '44 900',
    desc: 'Самый популярный тариф — с кураторством и обратной связью',
    color: '#FF6B00',
    popular: true,
    features: [
      { text: 'Доступ к 6 модулям курса', included: true },
      { text: 'Видеоуроки + конспекты', included: true },
      { text: 'Шаблоны объявлений', included: true },
      { text: 'Закрытый чат студентов', included: true },
      { text: 'Проверка домашних заданий', included: true },
      { text: 'Личная консультация с автором', included: false },
      { text: 'Поддержка 3 месяца', included: true },
    ],
  },
  {
    name: 'VIP',
    price: '49 900',
    oldPrice: '89 900',
    desc: 'Максимальный результат с личным сопровождением автора',
    color: '#0066FF',
    popular: false,
    features: [
      { text: 'Доступ к 6 модулям курса', included: true },
      { text: 'Видеоуроки + конспекты', included: true },
      { text: 'Шаблоны объявлений', included: true },
      { text: 'Закрытый чат студентов', included: true },
      { text: 'Проверка домашних заданий', included: true },
      { text: '3 личных консультации с автором', included: true },
      { text: 'Поддержка 6 месяцев', included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-[#0066FF] opacity-5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="w-8 h-px bg-[#0066FF]" />
            <span className="font-display text-xs text-[#0066FF] tracking-widest uppercase">Тарифы</span>
            <div className="w-8 h-px bg-[#0066FF]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-4 reveal">
            Выбери свой
            <br />
            <span className="text-gradient-orange">формат</span>
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto reveal">
            Гарантия возврата денег в течение 7 дней, если курс не понравится. 
            Без вопросов и без бюрократии.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative reveal ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FFB800] font-display text-xs font-bold text-white shadow-lg">
                    🔥 Хит продаж
                  </div>
                </div>
              )}

              <div
                className={`h-full flex flex-col rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#FF6B00]/10 to-[#12121F] border-[#FF6B00]/40 glow-orange'
                    : 'card-glass border-[#1E1E35] hover:border-[#2E2E4E]'
                }`}
              >
                {/* Plan name & desc */}
                <div className="mb-6">
                  <div
                    className="inline-block px-3 py-1 rounded-lg font-display text-xs font-bold mb-3"
                    style={{ background: plan.color + '20', color: plan.color }}
                  >
                    {plan.name}
                  </div>
                  <p className="font-body text-sm text-white/55 leading-relaxed">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="font-body text-sm text-white/40 line-through mb-1">{plan.oldPrice} ₽</div>
                  <div className="flex items-end gap-2">
                    <span className="font-display font-black text-4xl text-white">{plan.price}</span>
                    <span className="font-body text-white/60 mb-1">₽</span>
                  </div>
                  <div className="font-body text-xs text-white/40">единоразово</div>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                          feature.included ? '' : 'opacity-30'
                        }`}
                        style={{ background: feature.included ? plan.color + '25' : '#FFFFFF10' }}
                      >
                        {feature.included ? (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 1L7 7M7 1L1 7" stroke="#6B6B8A" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`font-body text-sm leading-snug ${
                          feature.included ? 'text-white/80' : 'text-white/30'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#apply"
                  className={`block text-center py-4 rounded-2xl font-display text-sm font-bold tracking-wide transition-all ${
                    plan.popular
                      ? 'btn-primary'
                      : 'border border-white/20 text-white/70 hover:text-white hover:border-white/40'
                  }`}
                >
                  {plan.popular ? 'Выбрать этот тариф →' : 'Записаться'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 reveal">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛡️</span>
            <div>
              <div className="font-display font-bold text-white text-sm">Гарантия 7 дней</div>
              <div className="font-body text-xs text-white/50">Возврат без вопросов</div>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-3">
            <span className="text-3xl">💳</span>
            <div>
              <div className="font-display font-bold text-white text-sm">Рассрочка 0%</div>
              <div className="font-body text-xs text-white/50">На 6 месяцев</div>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔒</span>
            <div>
              <div className="font-display font-bold text-white text-sm">Безопасная оплата</div>
              <div className="font-body text-xs text-white/50">Защита покупателя</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
