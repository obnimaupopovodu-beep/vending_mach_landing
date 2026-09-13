type Notice = { title: string; fields: Record<string, string | undefined> };

export async function notifyOwner({ title, fields }: Notice) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const body = [title, "", ...Object.entries(fields).map(([key, value]) => `${key}: ${value || "не указано"}`)].join("\n");
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: body }),
  });
  if (!response.ok) throw new Error("Telegram notification failed");
}
