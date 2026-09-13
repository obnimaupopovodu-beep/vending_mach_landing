import { NextResponse } from "next/server";
import { notifyOwner } from "@/lib/notifications";
import { getServerSupabase } from "@/lib/supabase";
import { customerSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const parsed = customerSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success || parsed.data.website) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const db = getServerSupabase();
  if (!db) return NextResponse.json({ error: "Service is not configured" }, { status: 503 });
  const data = parsed.data;
  const { error } = await db.from("customer_messages").insert({ request_type: data.requestType, location: data.location || null, name: data.name || null, contact: data.contact || null, message: data.message, privacy_consent: data.privacyConsent });
  if (error) { console.error("customer_message insert failed", error.message); return NextResponse.json({ error: "Could not save message" }, { status: 500 }); }
  notifyOwner({ title: "Новое обращение с сайта", fields: { "Тип": data.requestType, "Локация": data.location, "Имя": data.name, "Контакт": data.contact, "Сообщение": data.message } }).catch((error) => console.error("customer notification failed", error));
  return NextResponse.json({ ok: true });
}
