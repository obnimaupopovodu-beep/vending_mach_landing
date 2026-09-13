import { z } from "zod";

const phone = z.string().trim().min(7, "Введите корректный телефон");
const email = z.string().trim().email("Введите корректный email");

export const partnerSchema = z.object({
  organizationName: z.string().trim().min(2, "Укажите организацию"),
  venueType: z.string().min(1, "Выберите тип площадки"),
  city: z.string().trim().optional(),
  contactName: z.string().trim().min(2, "Укажите контактное лицо"),
  phone,
  email: z.union([email, z.literal("")]).optional(),
  message: z.string().trim().max(2000).optional(),
  privacyConsent: z.literal(true, { error: "Необходимо согласие" }),
  website: z.string().max(0).optional(),
});

export const customerSchema = z.object({
  requestType: z.string().min(1, "Выберите тип обращения"),
  location: z.string().trim().optional(),
  name: z.string().trim().optional(),
  contact: z.string().trim().optional(),
  message: z.string().trim().min(10, "Сообщение должно содержать не менее 10 символов").max(3000),
  privacyConsent: z.literal(true, { error: "Необходимо согласие" }),
  website: z.string().max(0).optional(),
});

export type PartnerInput = z.infer<typeof partnerSchema>;
export type CustomerInput = z.infer<typeof customerSchema>;
