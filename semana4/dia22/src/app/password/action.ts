"use server"

import PasswordSchema from "@/schema/passwordSchema"

const handlePasswordForm = async (prevState: any, formData: FormData) => {
    const data = {
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword")
    }

    const parsed = PasswordSchema.safeParse(data)

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
        }
    }
    return { success: true, errors: {} }
}

export default handlePasswordForm