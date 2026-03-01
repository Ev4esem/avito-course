import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, telegram, tariff, goal } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    // Option 1: Send to Telegram Bot
    // Replace BOT_TOKEN and CHAT_ID with your values
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (BOT_TOKEN && CHAT_ID) {
      const message = `
🔥 *Новая заявка на курс АвитоПро!*

👤 Имя: ${name}
📞 Телефон: ${phone}
📱 Telegram: ${telegram || 'не указан'}
💎 Тариф: ${tariff}
🎯 Цель: ${goal || 'не указана'}

⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
      `.trim();

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
    }

    // Option 2: Save to database / Google Sheets / CRM
    // Add your integration here

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
