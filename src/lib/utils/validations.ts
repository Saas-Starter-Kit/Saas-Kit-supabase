'use client';

import * as z from 'zod';

export const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
