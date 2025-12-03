import { z } from "zod"

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(18)
});

export default UserSchema