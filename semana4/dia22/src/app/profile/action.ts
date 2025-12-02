"use server"

import ProfileSchema from "@/schema/profileSchema";

export async function handleForm(prevState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        age: Number(formData.get("age")),
        address: {
            city: formData.get("city"),
            zip: formData.get("zip")
        }
    }


    const parsed = ProfileSchema.safeParse(data)

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
        }
    }

    return { success: true, errors: {} }
}