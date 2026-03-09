'use client';

import { useState } from 'react';

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 11 && digits.length <= 15;
}

export default function ApplicationForm({ initialTariff }: { initialTariff?: string }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    tariff: initialTariff || 'Полноценный',
    goal: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === 'name') setNameError('');
    if (e.target.name === 'phone') setPhoneError('');
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    let hasError = false;
    if (!form.name.trim()) {
      setNameError('Пожалуйста, введите ваше имя');
      hasError = true;
    }
    if (!form.phone.trim()) {
      setPhoneError('Пожалуйста, введите номер телефона');
      hasError = true;
    } else if (!isValidPhone(form.phone)) {
      setPhoneError('Введите корректный номер (не менее 11 цифр)');
      hasError = true;
    }
    if (hasError) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', tariff: 'Полноценный', goal: '' });
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
        {/* Header — скрывается после отправки */}
        {status !== 'success' && (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4 reveal">
              <div className="w-8 h-px bg-[#DC2626]" />
              <span className="font-display text-xs text-[#DC2626] tracking-widest uppercase">Запись на курс</span>
              <div className="w-8 h-px bg-[#DC2626]" />
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-4 reveal">
              Оставьте заявку
              <br />
              <span className="text-gradient-red">прямо сейчас</span>
            </h2>
            <p className="font-body text-white/60 max-w-lg mx-auto reveal">
              Заполните форму и мы свяжемся с вами в течение дня.
            </p>
          </div>
        )}

        {/* Form card */}
        <div className="gradient-border rounded-3xl p-0.5 reveal">
          <div className="card-glass rounded-3xl p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Заявка принята!</h3>
                <p className="font-body text-white/60">
                  Свяжемся с вами в течение дня.
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
                      className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3.5 font-body text-white placeholder-white/25 focus:outline-none transition-colors ${
                        nameError ? 'border-red-500/70 focus:border-red-500' : 'border-[#1E1E1E] focus:border-[#DC2626]/50'
                      }`}
                    />
                    {nameError && (
                      <p className="font-body text-xs text-red-400 mt-1.5">{nameError}</p>
                    )}
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
                      className={`w-full bg-[#0A0A0A] border rounded-xl px-4 py-3.5 font-body text-white placeholder-white/25 focus:outline-none transition-colors ${
                        phoneError ? 'border-red-500/70 focus:border-red-500' : 'border-[#1E1E1E] focus:border-[#DC2626]/50'
                      }`}
                    />
                    {phoneError && (
                      <p className="font-body text-xs text-red-400 mt-1.5">{phoneError}</p>
                    )}
                  </div>
                </div>

                {/* Tariff — full width */}
                <div>
                  <label className="font-display text-xs text-white/50 tracking-wider uppercase mb-2 block">
                    Тариф
                  </label>
                  <div className="relative">
                    <select
                      name="tariff"
                      value={form.tariff}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3.5 font-body text-white focus:outline-none focus:border-[#DC2626]/50 transition-colors appearance-none cursor-pointer pr-10"
                    >
                      <option value="Базовый">Базовый — 5 000 ₽</option>
                      <option value="Полноценный">Полноценный — 7 490 ₽</option>
                      <option value="VIP">VIP — 19 990 ₽</option>
                      <option value="Личное наставничество">Личное наставничество — 49 990 ₽</option>
                    </select>
                    {/* Arrow icon */}
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5L7 9L11 5" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
                  disabled={status === 'loading'}
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
                    'Отправить заявку →'
                  )}
                </button>

                {status === 'error' && (
                  <p className="font-body text-sm text-red-400 text-center">
                    Ошибка отправки. Пожалуйста, попробуйте ещё раз.
                  </p>
                )}

                <p className="font-body text-xs text-white/30 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
