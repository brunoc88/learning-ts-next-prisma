import { z } from "zod"
import {prisma} from "@/lib/prisma"

const RegisterSchema = z.object({
  email: z.string().email().refine(async (email) => {
    const exists = await prisma.user.findUnique({ where: { email }});
    return !exists;
  }, "Email ya registrado"),
  password: z.string().min(6)
});

export default RegisterSchema

