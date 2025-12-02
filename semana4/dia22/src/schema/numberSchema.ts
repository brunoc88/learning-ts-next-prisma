import { z } from "zod"

// los form siempre mandan string
// usamos super refinado porque el refine comun no nos permite convertir a numero
const NumberSchema = z.object({
  number: z.string().transform((val, ctx) => {
    const n = Number(val);
    if (isNaN(n)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debe ser un número válido",
      });
      return z.NEVER; // detiene la transformación y lanza error
    }
    return n; //el valor transformado final
  })
});


export default NumberSchema