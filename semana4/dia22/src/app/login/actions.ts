"use server";

import LoginSchema from "@/schema/loginSchema";

export async function handleLogin(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parsed = LoginSchema.safeParse(data);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  return { success: true, errors: {} };
}

