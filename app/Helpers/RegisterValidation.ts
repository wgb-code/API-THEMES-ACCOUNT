import { z } from "zod"

export const dataValidationsSchema = z.object({
    name: z.string({
            required_error: "The 'name' field is mandatory.",
            invalid_type_error: "Name must be a string."
        }).min(3).max(30),
    email: z.string({
            required_error: "The 'email' field is mandatory." 
        }).email({ message: "The 'email' field must be a valid email address." }),
    password: z.string({
            required_error: "The 'password' field is mandatory."
        })
        .min(8, { message: "The 'password' field must have at least 8 characters." })
        .max(30, { message: "The 'password' field must not exceed 30 characters." }),
    address: z.string({
            required_error: "The 'address' field is mandatory."
        })
        .min(5, { message: "The 'address' field must have at least 5 characters."})
        .max(30, { message: "The 'address' field must have at least 30 characters."})
})