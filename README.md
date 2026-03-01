# АвитоПро — Лендинг курса

Продающий одностраничный сайт для курса по заработку на Авито.

## Структура

- `/app` — Next.js App Router страницы
- `/components` — React компоненты (Hero, About, WhatYouLearn, Pricing, ApplicationForm, Footer, Nav)
- `/app/api/apply` — API-роут для обработки заявок

## Блоки сайта

1. **Hero** — Приветственный экран с анимацией частиц
2. **About** — Об авторе + кейсы учеников
3. **WhatYouLearn** — Программа курса (6 модулей)
4. **Pricing** — Три тарифа (Старт / Практик / VIP)
5. **ApplicationForm** — Форма заявки
6. **Footer** — Подвал

## Деплой на Vercel

### Быстрый деплой

1. Загрузи папку на GitHub
2. Зайди на [vercel.com](https://vercel.com)
3. Нажми "New Project" → выбери репозиторий
4. Нажми "Deploy"

### Настройка уведомлений (Telegram)

1. Создай бота через [@BotFather](https://t.me/BotFather)
2. Получи токен бота
3. Узнай свой chat_id через [@userinfobot](https://t.me/userinfobot)
4. В Vercel → Settings → Environment Variables добавь:
   - `TELEGRAM_BOT_TOKEN` = токен бота
   - `TELEGRAM_CHAT_ID` = твой chat id

### Локальный запуск

```bash
npm install
cp .env.example .env.local
# Заполни .env.local
npm run dev
```

## Кастомизация

- Замени имя автора в `components/About.tsx`
- Измени цены в `components/Pricing.tsx`
- Обнови ссылки на Telegram/WhatsApp в `components/ApplicationForm.tsx`
- Добавь реальные фото/кейсы

## Технологии

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (деплой)
