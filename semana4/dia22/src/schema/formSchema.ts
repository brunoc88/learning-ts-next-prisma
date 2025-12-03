import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().email(),
  age: z.coerce.number().min(18), // convierte strings a números automáticamente
});

