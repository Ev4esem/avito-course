'use client';

import { useState } from 'react';

// addedAt: на каком уровне тарифа добавился пункт
// 0 = базовый, 1 = полноценный, 2 = vip, 3 = максимум
type Feature = {
  text: string;
  addedAt: number;
};

interface Plan {
  name: string;
  price: string;
  subtitle: string;
  color: string;
  level: number; // 0–3
  popular: boolean;
  isDiamond: boolean;
  badge?: string;
  features: Feature[];
  previewCount: number;
}

// Цвет бриллиантового тарифа
const DIAMOND_COLOR = '#67E8F9';

// Цвет подсветки по уровню тарифа, в котором пункт ВПЕРВЫЕ появился
const LEVEL_COLORS: Record<number, string> = {
  0: '',           // базовый — без подсветки
  1: '#DC2626',    // полноценный — красный
  2: '#D4AF37',    // VIP — золото
  3: DIAMOND_COLOR, // личное наставничество — голубой
};

const plans: Plan[] = [
  {
    name: 'Базовый',
    price: '5 000',
    subtitle: 'Формат самостоятельного обучения для тех, кто хочет освоить профессию «Авитолог» в удобном темпе без личного сопровождения Ахмада.',
    color: '#8A8A8A',
    level: 0,
    popular: false,
    isDiamond: false,
    previewCount: 3,
    features: [
      { text: 'Полноценная программа обучения, состоящая из 7 обучающих модулей', addedAt: 0 },
      { text: 'Общая продолжительность обучения — 21 день', addedAt: 0 },
      { text: 'Доступ к чату единомышленников для общения, обмена опытом и поддержки', addedAt: 0 },
      { text: 'Доступ к новостному каналу с дополнительными материалами и активностями', addedAt: 0 },
      { text: 'Доступ ко всем материалам курса сроком на 6 месяцев с момента начала обучения', addedAt: 0 },
    ],
  },
  {
    name: 'Полноценный',
    price: '7 490',
    subtitle: 'Формат обучения с поддержкой куратора и участием Ахмада для тех, кто хочет прийти к результату быстрее и увереннее.',
    color: '#DC2626',
    level: 1,
    popular: true,
    isDiamond: false,

    previewCount: 4,
    features: [
      { text: 'Полноценная программа обучения, состоящая из 7 обучающих модулей', addedAt: 0 },
      { text: 'Общая продолжительность обучения — 21 день', addedAt: 0 },
      { text: 'Доступ к чату единомышленников для общения и обмена опытом', addedAt: 0 },
      { text: 'Доступ к новостному каналу с дополнительными материалами и активностями', addedAt: 0 },
      { text: 'Обратная связь от куратора на протяжении всего периода обучения', addedAt: 1 },
      { text: 'Три онлайн-встречи в неделю с кураторами для выполнения практических заданий и достижения конкретных результатов', addedAt: 1 },
      { text: 'Одна онлайн-встреча с автором курса Ахмадом, на которой он пошагово разбирает стратегию выхода на результат', addedAt: 1 },
      { text: 'Сертификат о получении квалификации «Авитолог» после успешного завершения обучения', addedAt: 1 },
      { text: 'Доступ к закрытому каналу с Ахмадом и учениками после завершения обучения', addedAt: 1 },
      { text: 'Доступ ко всем материалам курса сроком на 1 год', addedAt: 1 },
      { text: 'Гарантия результата с возможностью 100% возврата денежных средств при соблюдении условий обучения', addedAt: 1 },
    ],
  },
  {
    name: 'VIP',
    price: '19 990',
    subtitle: 'Формат углубленного обучения с личным участием Ахмада и расширенной персональной поддержкой.',
    color: '#D4AF37',
    level: 2,
    popular: false,
    isDiamond: false,

    previewCount: 4,
    features: [
      { text: 'Полноценная программа обучения, состоящая из 7 обучающих модулей', addedAt: 0 },
      { text: 'Общая продолжительность обучения — 21 день', addedAt: 0 },
      { text: 'Доступ к чату единомышленников для общения и обмена опытом', addedAt: 0 },
      { text: 'Доступ к новостному каналу с дополнительными материалами и активностями', addedAt: 0 },
      { text: 'Обратная связь от куратора на протяжении всего периода обучения', addedAt: 1 },
      { text: 'Три онлайн-встречи в неделю с кураторами для выполнения практических заданий', addedAt: 1 },
      { text: 'Одна онлайн-встреча с автором курса Ахмадом, где он пошагово разбирает стратегию достижения результата', addedAt: 1 },
      { text: 'Сертификат о получении квалификации «Авитолог»', addedAt: 1 },
      { text: 'Доступ к закрытому каналу с Ахмадом и учениками после завершения обучения', addedAt: 1 },
      { text: 'Доступ ко всем материалам курса сроком на 1 год', addedAt: 1 },
      { text: 'Гарантия результата с возможностью 100% возврата денежных средств при соблюдении условий обучения', addedAt: 1 },
      { text: 'Личный чат с Ахмадом с возможностью задавать вопросы напрямую', addedAt: 2 },
      { text: 'Три персональных онлайн-разбора с Ахмадом в течение обучения', addedAt: 2 },
    ],
  },
  {
    name: 'Личное наставничество',
    price: '49 990',
    subtitle: 'Формат индивидуальной работы с Ахмадом и сопровождения до результата.',
    color: DIAMOND_COLOR,
    level: 3,
    popular: false,
    isDiamond: true,

    previewCount: 4,
    features: [
      { text: 'Полноценная программа обучения, состоящая из 7 обучающих модулей', addedAt: 0 },
      { text: 'Общая продолжительность обучения — 21 день', addedAt: 0 },
      { text: 'Доступ к чату единомышленников', addedAt: 0 },
      { text: 'Доступ к новостному каналу с дополнительными материалами и активностями', addedAt: 0 },
      { text: 'Обратная связь от куратора на протяжении всего периода обучения', addedAt: 1 },
      { text: 'Три онлайн-встречи в неделю с кураторами для выполнения практических заданий', addedAt: 1 },
      { text: 'Одна онлайн-встреча с автором курса Ахмадом с подробным пошаговым разбором стратегии выхода на результат', addedAt: 1 },
      { text: 'Сертификат о получении квалификации «Авитолог»', addedAt: 1 },
      { text: 'Доступ к закрытому каналу с Ахмадом и учениками после завершения обучения', addedAt: 1 },
      { text: 'Доступ ко всем материалам курса сроком на 1 год', addedAt: 1 },
      { text: 'Гарантия результата с возможностью 100% возврата денежных средств при соблюдении условий обучения', addedAt: 1 },
      { text: 'Личный чат с Ахмадом с возможностью задавать вопросы напрямую', addedAt: 2 },
      { text: 'Три персональных онлайн-разбора с Ахмадом в течение обучения', addedAt: 2 },
      { text: 'Личное сопровождение Ахмада в течение 6 месяцев после завершения обучения', addedAt: 3 },
      { text: 'Личная встреча с Ахмадом', addedAt: 3 },
    ],
  },
];

function getCardClass(plan: Plan): string {
  if (plan.isDiamond) {
    return 'bg-gradient-to-b from-[#0D2F3F] via-[#122535] to-[#1A1A1A] border-[#67E8F9]/50';
  }
  if (plan.popular) {
    return 'bg-gradient-to-b from-[#DC2626]/15 to-[#1C1C1C] border-[#DC2626]/40 glow-red';
  }
  if (plan.level === 2) {
    return 'bg-gradient-to-b from-[#D4AF37]/15 to-[#1C1C1C] border-[#D4AF37]/40 glow-gold';
  }
  // Базовый
  return 'bg-[#1E1E1E] border-[#323232] hover:border-[#444444]';
}

function getBadgeStyle(plan: Plan) {
  if (plan.isDiamond) {
    return {
      background: 'linear-gradient(135deg, #22D3EE, #67E8F9, #A5F3FC)',
      color: '#0A1A20',
    };
  }
  if (plan.level === 2) {
    return {
      background: 'linear-gradient(135deg, #D4AF37, #F5D76E)',
      color: '#0A0A0A',
    };
  }
  if (plan.popular) {
    return {
      background: 'linear-gradient(135deg, #DC2626, #EF4444)',
      color: '#fff',
    };
  }
  return {
    background: 'rgba(239,68,68,0.15)',
    color: '#fff',
  };
}

function getCtaClass(plan: Plan): string {
  if (plan.isDiamond) {
    return 'bg-gradient-to-r from-[#22D3EE] to-[#67E8F9] text-[#0A1A20] font-black hover:shadow-[0_8px_40px_rgba(103,232,249,0.4)] hover:-translate-y-0.5';
  }
  if (plan.popular) {
    return 'btn-primary';
  }
  if (plan.level === 2) {
    return 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] hover:-translate-y-0.5';
  }
  return 'border border-white/20 text-white/70 hover:text-white hover:border-white/40';
}

function getCtaText(plan: Plan): string {
  if (plan.isDiamond) return 'Занять место →';
  if (plan.level === 2) return 'Занять место →';
  if (plan.popular) return 'Занять место →';
  return 'Занять место →';
}

function PlanCard({ plan }: { plan: Plan }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? plan.features : plan.features.slice(0, plan.previewCount);
  const hasMore = plan.features.length > plan.previewCount;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${getCardClass(plan)}`}
    >
      {/* Diamond glow overlay */}
      {plan.isDiamond && (
        <div className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{ boxShadow: 'inset 0 0 60px rgba(103,232,249,0.07), 0 0 40px rgba(103,232,249,0.12)' }}
        />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-4">
          <div
            className="px-3 py-1.5 rounded-full font-display text-xs font-bold"
            style={getBadgeStyle(plan)}
          >
            {plan.badge}
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {/* Name */}
        <div
          className="inline-block px-3 py-1 rounded-lg font-display text-xs font-bold mb-3 self-start"
          style={{ background: plan.color + '20', color: plan.color }}
        >
          {plan.name}
        </div>

        {/* Subtitle */}
        <p className="font-body text-sm text-white/55 leading-relaxed mb-5 pr-16">{plan.subtitle}</p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-end gap-2">
            {plan.level === 2 && !plan.isDiamond ? (
              <span className="font-display font-black text-4xl text-gradient-gold">{plan.price}</span>
            ) : (
              <span
                className="font-display font-black text-4xl"
                style={{ color: plan.isDiamond ? DIAMOND_COLOR : 'white' }}
              >
                {plan.price}
              </span>
            )}
            <span className="font-body text-white/60 mb-1">₽</span>
          </div>
          <div className="font-body text-xs text-white/40 mt-1">единоразово</div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-5"
          style={{ background: `linear-gradient(90deg, ${plan.color}50, transparent)` }}
        />

        {/* Features */}
        <div className="flex flex-col gap-3 flex-grow">
          {shown.map((feature, j) => {
            const highlightColor = LEVEL_COLORS[feature.addedAt] || '';
            const isHighlighted = feature.addedAt > 0 && !!highlightColor;
            const iconColor = isHighlighted ? highlightColor : '#6B6B6B';
            return (
              <div key={j} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{
                    background: isHighlighted
                      ? highlightColor + '40'
                      : 'rgba(107,107,107,0.15)',
                  }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke={iconColor}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {isHighlighted ? (
                  <span
                    className="font-body text-sm leading-snug font-semibold"
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      background: highlightColor + '25',
                      borderRadius: '8px',
                      padding: '2px 8px',
                      boxShadow: `0 0 8px ${highlightColor}18`,
                    }}
                  >
                    {feature.text}
                  </span>
                ) : (
                  <span className="font-body text-sm text-white/60 leading-snug">
                    {feature.text}
                  </span>
                )}
              </div>
            );
          })}

          {/* Toggle */}
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 mt-2 group"
              style={{ color: plan.color }}
            >
              <span className="font-body text-sm font-medium">
                {expanded
                  ? 'Свернуть'
                  : `Ещё ${plan.features.length - plan.previewCount} пункт${
                      plan.features.length - plan.previewCount === 1
                        ? ''
                        : plan.features.length - plan.previewCount < 5
                        ? 'а'
                        : 'ов'
                    }`}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* CTA */}
        <a
          href={`/apply?tariff=${encodeURIComponent(plan.name)}`}
          className={`mt-6 block text-center py-4 rounded-2xl font-display text-sm font-bold tracking-wide transition-all ${getCtaClass(plan)}`}
        >
          {getCtaText(plan)}
        </a>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-[#DC2626] opacity-5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full bg-[#67E8F9] opacity-3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Тарифы</span>
            <div className="w-8 h-px bg-[#DC2626]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-4 reveal">
            Выбери свой
            <br />
            <span className="text-gradient-red">формат</span>
          </h2>
        </div>

        {/* Plans: 2+2 grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
          {plans.map((plan, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
