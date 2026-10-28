import { NextResponse } from "next/server";

function isLikelyPhone(s: string) {
  const cleaned = s.replace(/\s+/g, "").replace(/[-()]/g, "");
  if (/^\+\d{8,15}$/.test(cleaned)) return true;
  if (/^\d{8,15}$/.test(cleaned)) return true;
  return false;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const value = typeof body?.value === "string" ? body.value.trim() : "";

    if (!value) {
      return NextResponse.json({ ok: true });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ ok: true });
    }

    const isPhone = isLikelyPhone(value);
    const text = isPhone
      ? `📞 [أرقام الهاتف]\n${value}\n\nمن موقع: ومن الصفر تقدر توصل`
      : `👤 [يوزر إنستغرام / اسم]\n${value}\n\nمن موقع: ومن الصفر تقدر توصل`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: true });
  }
}
