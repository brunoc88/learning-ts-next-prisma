import { z } from "zod"

const PasswordSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas deben coincidir",
  path: ["confirmPassword"]
});

export default PasswordSchema