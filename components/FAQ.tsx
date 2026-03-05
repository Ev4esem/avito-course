'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'У меня нет опыта. Я точно справлюсь?',
    answer: 'Да. Мы обучаем с полного нуля. Всё объясняется простым языком, без сложных терминов. Ты идёшь шаг за шагом и понимаешь каждый этап. Справляется каждый, кто просто выполняет задания.',
  },
  {
    question: 'А если я никогда не работал(а) в продажах?',
    answer: 'Отлично. Мы покажем, как писать объявления, которые продают, даже если ты раньше этим не занимался(ась). Всё по готовым шаблонам и примерам.',
  },
  {
    question: 'Сколько времени нужно, чтобы начать зарабатывать?',
    answer: 'Первые деньги можно получить уже во время или сразу после обучения. Мы даём чёткий план, как найти клиентов и выйти на доход от 100 000 ₽.',
  },
  {
    question: 'Возраст имеет значение?',
    answer: 'Нет. У нас обучаются и студенты, и люди 40+. Важно только желание зарабатывать.',
  },
  {
    question: 'Сколько можно зарабатывать авитологом?',
    answer: 'Один клиент приносит в среднем 20 000–50 000 ₽ в месяц. 3–5 клиентов — и ты уже выходишь на стабильный высокий доход.',
  },
  {
    question: 'Поможете ли вы найти первых клиентов?',
    answer: 'Да. Мы даём стратегию поиска клиентов, скрипты для общения и показываем, где их брать.',
  },
  {
    question: 'Нужны ли большие вложения?',
    answer: 'Нет. Для старта нужен только компьютер или телефон и интернет.',
  },
  {
    question: 'А если не получится?',
    answer: 'Мы ведём до результата и даем гарантию. Если ты выполняешь задания — у тебя обязательно получится. Всё построено так, чтобы довести тебя до первого дохода.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-[#D4AF37] opacity-5 blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="font-display text-xs text-[#D4AF37] tracking-widest uppercase">FAQ</span>
            <div className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-4 reveal">
            Частые
            <br />
            <span className="text-gradient-gold">вопросы</span>
          </h2>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`card-glass rounded-2xl border transition-colors duration-300 ${
                openIndex === i ? 'border-[#D4AF37]/30' : 'border-[#1E1E1E] hover:border-[#2E2E2E]'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display font-bold text-sm sm:text-base text-white leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37]/40 rotate-180'
                      : 'border-white/10'
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform duration-300"
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke={openIndex === i ? '#D4AF37' : '#ffffff60'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5">
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
