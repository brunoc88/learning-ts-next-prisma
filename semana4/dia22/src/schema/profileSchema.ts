import { z } from "zod"

const ProfileSchema = z.object({
  name: z.string().min(2),
  age: z.number().min(18),
  address: z.object({
    city: z.string(),
    zip: z.string().min(3)
  })
});

export default ProfileSchema