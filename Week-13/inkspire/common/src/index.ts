import z, { string } from 'zod';


export const signUpInputs = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

//type inference in zod

export const signInInputs = z.object({
    email : z.string().email(),
    password : z.string().min(6)
})


export const createBlogInput = z.object({
    title : z.string(),
    content : z.string()
})



export const updateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
    id : z.number()
})

export type signUpInputs = z.infer<typeof signUpInputs>;
export type signInInputs = z.infer<typeof signInInputs>;
export type CreateBlogInputs = z.infer<typeof createBlogInput>;
export type UpdateBlogInputs = z.infer<typeof updateBlogInput>;