"use server";

import { FormSchema } from "@/schema/formSchema";

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    age: formData.get("age"),
  };

  // safeParseAsync no es necesario si no hay refinamientos async
  const parsed = FormSchema.safeParse(data);

  if (!parsed.success) {
    // flatten convierte los errores en un objeto simple
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    data: parsed.data, // data ya coaccionada
    errors: {},
  };
}
