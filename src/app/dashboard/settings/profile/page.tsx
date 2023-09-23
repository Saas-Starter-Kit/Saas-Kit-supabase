'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils/helpers';
import { Button, buttonVariants } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/Form';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/Card';

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.'
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.'
    }),
  email: z.string().email()
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      bio: 'I own a computer.',
      urls: [{ value: 'https://shadcn.com' }, { value: 'http://twitter.com/shadcn' }]
    },
    mode: 'onChange'
  });

  function onSubmit(data: ProfileFormValues) {
    //toast({
    //  title: 'You submitted the following values:',
    //  description: (
    //    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //      <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //    </pre>
    //  )
    //});
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Update Profile</CardTitle>
          <CardDescription>Update Profile display name and email</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-4" type="submit">
                Update Display Name
              </Button>
            </form>
          </Form>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-14">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>This is the email associated your account</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-4" type="submit">
                Update Email
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              Click below to Update password, You will be redirected to the update password page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/auth/forgot-password"
              className={cn(buttonVariants({ size: 'sm' }), 'py-4')}
            >
              Update Password
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
