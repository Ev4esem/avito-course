'use client';

import { useState } from 'react';

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    telegram: '',
    tariff: 'Практик',
    goal: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', telegram: '', tariff: 'Практик', goal: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="apply" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DC2626]/3 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="w-8 h-px bg-[#DC2626]" />
            <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Запись на курс</span>
            <div className="w-8 h-px bg-[#DC2626]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-4 reveal">
            Оставь заявку
            <br />
            <span className="text-gradient-red">прямо сейчас</span>
          </h2>
          <p className="font-body text-white/60 max-w-lg mx-auto reveal">
            Заполни форму и мы свяжемся с тобой в течение 30 минут.
            Осталось <span className="text-[#DC2626] font-medium">12 мест</span> на ближайший поток.
          </p>
        </div>

        {/* Form card */}
        <div className="gradient-border rounded-3xl p-0.5 reveal">
          <div className="card-glass rounded-3xl p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Заявка принята!</h3>
                <p className="font-body text-white/60">
                  Мы свяжемся с тобой в течение 30 минут. Проверь Telegram!
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="font-display text-xs text-white/50 tracking-wider uppercase mb-2 block">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Иван Петров"
                      className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3.5 font-body text-white placeholder-white/25 focus:outline-none focus:border-[#DC2626]/50 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-display text-xs text-white/50 tracking-wider uppercase mb-2 block">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 123-45-67"
                      className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3.5 font-body text-white placeholder-white/25 focus:outline-none focus:border-[#DC2626]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Telegram */}
                  <div>
                    <label className="font-display text-xs text-white/50 tracking-wider uppercase mb-2 block">
                      Telegram (username)
                    </label>
                    <input
                      type="text"
                      name="telegram"
                      value={form.telegram}
                      onChange={handleChange}
                      placeholder="@username"
                      className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3.5 font-body text-white placeholder-white/25 focus:outline-none focus:border-[#DC2626]/50 transition-colors"
                    />
                  </div>

                  {/* Tariff */}
                  <div>
                    <label className="font-display text-xs text-white/50 tracking-wider uppercase mb-2 block">
                      Тариф
                    </label>
                    <select
                      name="tariff"
                      value={form.tariff}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3.5 font-body text-white focus:outline-none focus:border-[#DC2626]/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Старт">Старт — 9 900 ₽</option>
                      <option value="Практик">Практик — 24 900 ₽</option>
                      <option value="VIP">VIP — 49 900 ₽</option>
                    </select>
                  </div>
                </div>

                {/* Goal */}
                <div>
                  <label className="font-display text-xs text-white/50 tracking-wider uppercase mb-2 block">
                    Какой доход хочешь получить?
                  </label>
                  <textarea
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                    placeholder="Например: хочу выйти на 150 000 рублей в месяц за 3 месяца"
                    rows={3}
                    className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3.5 font-body text-white placeholder-white/25 focus:outline-none focus:border-[#DC2626]/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading' || !form.name || !form.phone}
                  className="btn-primary w-full py-5 rounded-2xl font-display text-base font-bold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeDasharray="31.4" strokeDashoffset="10" />
                      </svg>
                      Отправляем...
                    </span>
                  ) : (
                    'Отправить заявку и получить бонусы →'
                  )}
                </button>

                {status === 'error' && (
                  <p className="font-body text-sm text-red-400 text-center">
                    Ошибка отправки. Напиши нам в Telegram напрямую.
                  </p>
                )}

                <p className="font-body text-xs text-white/30 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact alternatives */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center reveal">
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl border border-[#1E1E1E] hover:border-[#DC2626]/40 transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#DC2626]" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.01c-.12.55-.46.68-.93.43l-2.56-1.89-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.6 4.7-4.25c.2-.18-.04-.28-.32-.1L7.46 15.3l-2.52-.79c-.55-.17-.56-.55.12-.81l9.83-3.79c.45-.16.85.11.75.89z" />
            </svg>
            <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">Написать в Telegram</span>
          </a>
          <a
            href="https://wa.me/79001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl border border-[#1E1E1E] hover:border-green-500/40 transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-500" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">Написать в WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
