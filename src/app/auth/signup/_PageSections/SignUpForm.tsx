'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SupabaseSignUp, SupabaseSignInWithGoogle } from '@/lib/API/Services/supabase/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authFormSchema, authFormValues } from '@/lib/types/validations';
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
import config from '@/lib/config/auth';
import { Icons } from '@/components/Icons';

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const form = useForm<authFormValues>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {
    reset,
    setError,
    formState: { isSubmitting, errors }
  } = form;

  const handleSupabaseAuthError = (error, data, email) => {
    if (error) {
      setError('root', {
        type: error.name
      });
      setErrorMessage(error.message);
      reset({ email, password: '' });
      return { isError: true };
    }

    if (!data?.session || !data?.user) {
      setError('root', {
        type: 'Supabase Unknown Error'
      });
      setErrorMessage('Something Went Wrong, Please Try Again');
      reset({ email, password: '' });
      return { isError: true };
    }

    return { isError: false };
  };

  const onSubmit = async (values: authFormValues) => {
    const { data, error } = await SupabaseSignUp(values.email, values.password);

    const { isError } = handleSupabaseAuthError(error, data, values.email);
    if (isError) return;

    router.push(config.redirects.callback);
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await SupabaseSignInWithGoogle();

    if (error) {
      setError('root', {
        type: error.name
      });
      setErrorMessage(error.message);
      return;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email and password below to create your account
          </CardDescription>
          {errors && <div className="text-sm text-red-500 pt-2">{errorMessage}</div>}
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
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          {...field}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer">
                          {showPassword ? (
                            <Icons.EyeOff className="h-6 w-6" onClick={togglePasswordVisibility} />
                          ) : (
                            <Icons.Eye className="h-6 w-6" onClick={togglePasswordVisibility} />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">
                {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
                Create account
              </Button>
            </form>
          </Form>
          <div className="space-y-8 mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
              <Icons.Google />
              <span className="ml-2 font-semibold">Sign in with Google</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col">
            <div className="text-center text-sm text-gray-500">
              Already a member?{' '}
              <Link href="/auth/login" className="leading-7 text-indigo-600 hover:text-indigo-500">
                Login here.
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
