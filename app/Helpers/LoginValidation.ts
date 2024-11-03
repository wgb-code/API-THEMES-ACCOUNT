import { z } from "zod"

export const loginDataValidation = z.object({
    email: z.string({
        required_error: "The 'email' field is mandatory." 
    }).email({ message: "The 'email' field must be a valid email address." }),
    password: z.string({
        required_error: "The 'password' field is mandatory."
    })
    .min(8, { message: "The 'password' field must have at least 8 characters." })
    .max(30, { message: "The 'password' field must not exceed 30 characters." })
})