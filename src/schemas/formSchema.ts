import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().min(2).email(),
  phone: z
    .string()
    .regex(
      /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/
    ),
  plan: z.enum(['Arcade', 'Advanced', 'Pro']),
  payment: z.enum(['Monthly', 'Yearly']),
  online: z.boolean().optional(),
  storage: z.boolean().optional(),
  profile: z.boolean().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
