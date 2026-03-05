'use client';

import { useState } from 'react';

type Feature = {
  text: string;
  isNew?: boolean;
};

interface Plan {
  name: string;
  price: string;
  subtitle: string;
  color: string;
  popular: boolean;
  isVip: boolean;
  badge?: string;
  features: Feature[];
  previewCount: number; // how many items to show before "show more"
}

const plans: Plan[] = [
  {
    name: 'Базовый',
    price: '4 990',
    subtitle: 'Формат самостоятельного обучения для тех, кто хочет освоить профессию «Авитолог» в удобном темпе без личного сопровождения Ахмада.',
    color: '#6B6B6B',
    popular: false,
    isVip: false,
    previewCount: 3,
    features: [
      { text: 'Полноценная программа обучения, состоящая из 7 обучающих модулей' },
      { text: 'Общая продолжительность обучения — 21 день' },
      { text: 'Доступ к чату единомышленников для общения, обмена опытом и поддержки' },
      { text: 'Доступ к новостному каналу с дополнительными материалами и активностями' },
      { text: 'Доступ ко всем материалам курса сроком на 6 месяцев с момента начала обучения' },
    ],
  },
  {
    name: 'Полноценный',
    price: '7 490',
    subtitle: 'Формат обучения с поддержкой куратора и участием Ахмада для тех, кто хочет прийти к результату быстрее и увереннее.',
    color: '#DC2626',
    popular: true,
    isVip: false,
    badge: '🔥 Хит продаж',
    previewCount: 4,
    features: [
      { text: 'Полноценная программа обучения, состоящая из 7 обучающих модулей' },
      { text: 'Общая продолжительность обучения — 21 день' },
      { text: 'Доступ к чату единомышленников для общения и обмена опытом' },
      { text: 'Доступ к новостному каналу с дополнительными материалами и активностями' },
      { text: 'Обратная связь от куратора на протяжении всего периода обучения', isNew: true },
      { text: 'Три онлайн-встречи в неделю с кураторами для выполнения практических заданий и достижения конкретных результатов', isNew: true },
      { text: 'Одна онлайн-встреча с автором курса Ахмадом, на которой он пошагово разбирает стратегию выхода на результат', isNew: true },
      { text: 'Сертификат о получении квалификации «Авитолог» после успешного завершения обучения', isNew: true },
      { text: 'Доступ к закрытому каналу с Ахмадом и учениками после завершения обучения', isNew: true },
      { text: 'Доступ ко всем материалам курса сроком на 1 год', isNew: true },
      { text: 'Гарантия результата с возможностью 100% возврата денежных средств при соблюдении условий обучения', isNew: true },
    ],
  },
  {
    name: 'VIP',
    price: '19 990',
    subtitle: 'Формат углубленного обучения с личным участием Ахмада и расширенной персональной поддержкой.',
    color: '#D4AF37',
    popular: false,
    isVip: true,
    badge: '👑 VIP',
    previewCount: 4,
    features: [
      { text: 'Полноценная программа обучения, состоящая из 7 обучающих модулей' },
      { text: 'Общая продолжительность обучения — 21 день' },
      { text: 'Обратная связь от куратора на протяжении всего периода обучения' },
      { text: 'Доступ к чату единомышленников для общения и обмена опытом' },
      { text: 'Доступ к новостному каналу с дополнительными материалами и активностями' },
      { text: 'Три онлайн-встречи в неделю с кураторами для выполнения практических заданий' },
      { text: 'Одна онлайн-встреча с автором курса Ахмадом, где он пошагово разбирает стратегию достижения результата' },
      { text: 'Сертификат о получении квалификации «Авитолог»' },
      { text: 'Доступ к закрытому каналу с Ахмадом и учениками после завершения обучения' },
      { text: 'Доступ ко всем материалам курса сроком на 1 год' },
      { text: 'Гарантия результата с возможностью 100% возврата денежных средств при соблюдении условий обучения' },
      { text: 'Личный чат с Ахмадом с возможностью задавать вопросы напрямую', isNew: true },
      { text: 'Три персональных онлайн-разбора с Ахмадом в течение обучения', isNew: true },
    ],
  },
  {
    name: 'Личное наставничество',
    price: '49 990',
    subtitle: 'Формат индивидуальной работы с Ахмадом и сопровождения до результата.',
    color: '#EF4444',
    popular: false,
    isVip: false,
    badge: '⚡ Максимум',
    previewCount: 4,
    features: [
      { text: 'Полноценная программа обучения, состоящая из 7 обучающих модулей' },
      { text: 'Общая продолжительность обучения — 21 день' },
      { text: 'Обратная связь от куратора на протяжении всего периода обучения' },
      { text: 'Доступ к чату единомышленников' },
      { text: 'Доступ к новостному каналу с дополнительными материалами и активностями' },
      { text: 'Три онлайн-встречи в неделю с кураторами для выполнения практических заданий' },
      { text: 'Одна онлайн-встреча с автором курса Ахмадом с подробным пошаговым разбором стратегии выхода на результат' },
      { text: 'Сертификат о получении квалификации «Авитолог»' },
      { text: 'Доступ к закрытому каналу с Ахмадом и учениками после завершения обучения' },
      { text: 'Доступ ко всем материалам курса сроком на 1 год' },
      { text: 'Гарантия результата с возможностью 100% возврата денежных средств при соблюдении условий обучения' },
      { text: 'Личный чат с Ахмадом с возможностью задавать вопросы напрямую' },
      { text: 'Три персональных онлайн-разбора с Ахмадом в течение обучения' },
      { text: 'Личное сопровождение Ахмада в течение 6 месяцев после завершения обучения', isNew: true },
      { text: 'Личная встреча с Ахмадом', isNew: true },
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? plan.features : plan.features.slice(0, plan.previewCount);
  const hasMore = plan.features.length > plan.previewCount;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        plan.popular
          ? 'bg-gradient-to-b from-[#DC2626]/10 to-[#111111] border-[#DC2626]/40 glow-red'
          : plan.isVip
          ? 'bg-gradient-to-b from-[#D4AF37]/10 to-[#111111] border-[#D4AF37]/40 glow-gold'
          : 'card-glass border-[#1E1E1E] hover:border-[#2E2E2E]'
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-4">
          <div
            className="px-3 py-1.5 rounded-full font-display text-xs font-bold"
            style={{
              background: plan.isVip
                ? 'linear-gradient(135deg, #D4AF37, #F5D76E)'
                : plan.popular
                ? 'linear-gradient(135deg, #DC2626, #EF4444)'
                : 'rgba(239,68,68,0.15)',
              color: plan.isVip ? '#0A0A0A' : '#fff',
            }}
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
            <span
              className={`font-display font-black text-4xl ${
                plan.isVip ? 'text-gradient-gold' : 'text-white'
              }`}
            >
              {plan.price}
            </span>
            <span className="font-body text-white/60 mb-1">₽</span>
          </div>
          <div className="font-body text-xs text-white/40 mt-1">единоразово</div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-5"
          style={{ background: `linear-gradient(90deg, ${plan.color}40, transparent)` }}
        />

        {/* Features */}
        <div className="flex flex-col gap-3 flex-grow">
          {shown.map((feature, j) => (
            <div key={j} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                style={{ background: feature.isNew ? plan.color + '40' : plan.color + '25' }}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke={plan.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                className="font-body text-sm leading-snug"
                style={
                  feature.isNew
                    ? {
                        color: '#000000',
                        background: plan.color,
                        borderRadius: '3px',
                        padding: '1px 5px',
                        fontWeight: 600,
                      }
                    : { color: 'rgba(255,255,255,0.75)' }
                }
              >
                {feature.text}
              </span>
            </div>
          ))}

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
          href="#apply"
          className={`mt-6 block text-center py-4 rounded-2xl font-display text-sm font-bold tracking-wide transition-all ${
            plan.popular
              ? 'btn-primary'
              : plan.isVip
              ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] hover:-translate-y-0.5'
              : 'border border-white/20 text-white/70 hover:text-white hover:border-white/40'
          }`}
        >
          {plan.name === 'Личное наставничество'
            ? 'Записаться →'
            : plan.isVip
            ? 'Выбрать VIP →'
            : plan.popular
            ? 'Выбрать этот тариф →'
            : 'Записаться →'}
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
