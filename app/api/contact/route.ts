import { NextResponse } from 'next/server';
import { z } from 'zod';

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  telegram: z.string().optional(),
  projectType: z.string().min(2),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  brief: z.string().min(1).max(1000),
});

function escapeHTML(s: string) {
  return s.replace(
    /[&<>"']/g,
    c =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[c] as string,
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = Schema.parse(body);

    const msg =
      `<b>New request!</b>\n` +
      `\n<b>Name:</b> ${escapeHTML(data.name)}` +
      `\n<b>Email:</b> ${escapeHTML(data.email)}` +
      `\n<b>Telegram:</b> ${escapeHTML(data.telegram || '-')}` +
      `\n<b>Project type:</b> ${escapeHTML(data.projectType)}` +
      `\n<b>Budget:</b> ${escapeHTML(data.budget)}` +
      `\n<b>Timeline:</b> ${escapeHTML(data.timeline)}` +
      `\n<b>Brief:</b>\n${escapeHTML(data.brief)}`;

    const res = await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({
        chat_id: process.env.TG_CHAT_ID,
        text: msg,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('TG sendMessage error:', errText);
      return NextResponse.json({ ok: false, message: 'Telegram error' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    if (e?.issues) {
      console.log(e?.issues);
      return NextResponse.json({ ok: false, errors: e.issues }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ ok: false, message: 'Server error' }, { status: 500 });
  }
}
