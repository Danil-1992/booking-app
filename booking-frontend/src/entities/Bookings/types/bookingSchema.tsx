import { z } from "zod";

export const bookingSchema = z.object({
  apartmentId: z.string().min(1, "Выберите квартиру"),
  userName: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Слишком длинное имя"),
  userPhone: z
    .string()
    .min(10, "Введите корректный номер телефона")
    .regex(/^[\+\d][\d\(\)\-\s]{9,}$/, "Неверный формат телефона"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const bookingSchemaResp = z.object({
  id: z.number(),
  apartmentId: z.number(),
  userName: z.string(),
  userPhone: z.string(),
  bookingTime: z.string(),
  expiresAt: z.string(),
  status: z.string(),
});

export type bookingType = z.infer<typeof bookingSchemaResp>;

export const bookingArraySchema = z.array(bookingSchemaResp);

export type bookingArrayType = z.infer<typeof bookingArraySchema>;
