"use server";

import NumberSchema from "@/schema/numberSchema";


export async function handleNumer(prevState: any, formData: FormData) {
  const data = {
    number: formData.get("number")
  };

  const parsed = NumberSchema.safeParse(data);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  return { success: true, errors: {} };
}