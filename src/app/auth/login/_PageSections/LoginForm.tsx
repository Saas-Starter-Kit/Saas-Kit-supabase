'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SupabaseSignIn } from '@/lib/API/Services/supabase/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authFormSchema } from '@/lib/utils/validations';
import { useForm } from 'react-hook-form';
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
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import { Label } from '@/components/ui/Label';

import config from '@/lib/config/auth';

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema)
  });

  const onSubmit = (values: z.infer<typeof authFormSchema>) => {
    SupabaseSignIn(values.email, values.password);
    router.push(config.redirects.successAuth);
  };

  // TODO: merge onSubmit above function together
  async function onsubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login to your Account</CardTitle>
          <CardDescription>Enter your email and password below to login</CardDescription>
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
                      <Input placeholder="Email" {...field} />
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
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">
                <Icons.Mail className="mr-2 h-4 w-4" />
                Login with Email
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <Button variant="outline" type="button" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.Google className="mr-2 h-4 w-4" />
                )}{' '}
                Login with Google
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col">
            <div className="text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/auth/signup" className="leading-7 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial now!
              </Link>
            </div>
            <div className="mt-4 text-xs text-indigo-600 hover:text-indigo-500">
              <Link href="/auth/forgotpassword">forgot password</Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
