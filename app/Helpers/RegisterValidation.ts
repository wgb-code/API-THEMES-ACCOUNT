import { z } from "zod"

export const dataValidationsSchema = z.object({
    name: z.string()
        .min(3, { message: "The 'name' field must have at least 3 characters." })
        .max(30, { message: "The 'name' field must not exceed 30 characters." }),
    email: z.string()
        .email({ message: "The 'email' field must be a valid email address." }),
    password: z.string()
        .min(8, { message: "The 'password' field must have at least 8 characters." })
        .max(30, { message: "The 'password' field must not exceed 30 characters." })
})