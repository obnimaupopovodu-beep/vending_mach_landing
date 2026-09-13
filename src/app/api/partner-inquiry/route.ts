import { NextResponse } from "next/server";
import { notifyOwner } from "@/lib/notifications";
import { getServerSupabase } from "@/lib/supabase";
import { partnerSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const parsed = partnerSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success || parsed.data.website) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const db = getServerSupabase();
  if (!db) return NextResponse.json({ error: "Service is not configured" }, { status: 503 });
  const data = parsed.data;
  const { error } = await db.from("partner_inquiries").insert({ organization_name: data.organizationName, venue_type: data.venueType, city: data.city || null, contact_name: data.contactName, phone: data.phone, email: data.email || null, message: data.message || null, privacy_consent: data.privacyConsent });
  if (error) { console.error("partner_inquiry insert failed", error.message); return NextResponse.json({ error: "Could not save inquiry" }, { status: 500 }); }
  notifyOwner({ title: "Новая заявка на сотрудничество", fields: { "Организация": data.organizationName, "Тип площадки": data.venueType, "Город": data.city, "Контактное лицо": data.contactName, "Телефон": data.phone, "Email": data.email, "Комментарий": data.message } }).catch((error) => console.error("partner notification failed", error));
  return NextResponse.json({ ok: true });
}
