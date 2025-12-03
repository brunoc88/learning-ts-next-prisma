"use server"

import { prisma } from "@/lib/prisma";
import RegisterSchema from "@/schema/registerSchema"

const handleForm = async (prevState: any, formData: FormData) => {
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    const parsed = await RegisterSchema.safeParseAsync(data);

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
        }
    }

    // Si todo ok, podemos crear el usuario
    await prisma.user.create({
        data: {
            email: data.email,
            password: data.password, // ojo: en prod hay que hashear
        },
    });
    return { success: true, errors: {} }
}

export default handleForm;
