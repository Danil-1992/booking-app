import { z } from "zod";

export const apartmentSchema = z.object({
  id: z.number(),
  number: z.string(),
  houseAddress: z.string(),
});

export type apartmentType = z.infer<typeof apartmentSchema>;

export const apartmentArraySchema = z.array(apartmentSchema);

export type apartmentArrayType = z.infer<typeof apartmentArraySchema>;
