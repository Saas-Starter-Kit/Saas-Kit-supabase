'use client';

import { useRouter } from 'next/navigation';
import { SupabaseSignIn } from '@/lib/API/Services/supabase/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authFormSchema } from '@/lib/utils/validations';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/Form';
import { Input } from '@/components/ui/Input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';

export default function AuthForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema)
  });

  const onSubmit = (values: z.infer<typeof authFormSchema>) => {
    SupabaseSignIn(values.email, values.password);
    router.push('/dashboard');
    console.log(values);
  };

  return (
    <div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login to your Account</CardTitle>
          <CardDescription>Enter your email and password below to Login</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">Create account</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
