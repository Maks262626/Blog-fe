import * as z from 'zod';

export const registerValidation = z
  .object({
    firstName: z.string()
      .min(2, { message: 'firstName must be more than 1 characters' })
      .max(20, { message: 'firstName must be lest or equal than 20 characters' }),
    lastName: z.string()
      .min(2, { message: 'lastName must be more than 1 characters' })
      .max(20, { message: 'lastName must be lest or equal than 20 characters' }),
    nickName: z.string()
      .min(3, { message: 'nickName must be more than 2 characters' })
      .max(20, { message: 'nickName must be lest or equal than 20 characters' }),
    email: z.string().email({ message: 'Enter valid email' }),
    password: z.string(), // TODO: add min 8
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm && data.password !== '', {
    message: 'Passwords don\'t match',
    path: ['confirm']
  })

export const loginValidation = z
  .object({
    email: z.string().email({ message: 'Enter valid email' }),
    password: z.string(),
  })
