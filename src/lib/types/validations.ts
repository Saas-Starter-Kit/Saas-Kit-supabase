'use client';

import * as z from 'zod';

export const authFormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.'
    })
    .email(),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters.'
    })
    .max(30, {
      message: 'Password must not be longer than 30 characters.'
    })
});

export const todoFormSchema = z.object({
  title: z
    .string({
      required_error: 'Please enter a Title.'
    })
    .max(30, {
      message: 'Title must not be longer than 30 characters.'
    }),
  description: z.string().min(8, {
    message: 'Description Must be at least 8 characters'
  })
});
