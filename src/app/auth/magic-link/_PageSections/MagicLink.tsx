'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmailFormSchema, EmailFormValues, authFormSchema, authFormValues } from '@/lib/types/validations';
import { SupabaseSignInWithMagicLink } from '@/lib/API/Services/supabase/auth';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/Form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import { Icons } from '@/components/Icons';

export default function AuthForm() {
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const form = useForm<EmailFormValues>({
        resolver: zodResolver(EmailFormSchema),
    });

    const handleMagicLinkLogin = async (values: EmailFormValues) => {
       
        const { data, error } = await  SupabaseSignInWithMagicLink(values.email);

        const { isError } = handleSupabaseAuthError(error, data);
        if (isError) return;
        setEmailSent(true);
    };

    const {
        reset,
        setError,
        formState: { isSubmitting, errors }
      } = form;

    const handleSupabaseAuthError = (error, data) => {
    if (error) {
      setError('root', {
        type: error.name
      });
      setErrorMessage(error.message);
      reset({ email: '' });
      return { isError: true };
    }

    return { isError: false };
  };


      return (
        <>
          {emailSent ? (
            <div className="border p-4 flex justify-between items-center">
            <p>Check your email to login</p>
            <Button color="ghost" size="sm" onClick={() => setEmailSent(false)}>
              Try again
            </Button>
          </div>
        ) : (
            <Card>
                <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Email Link to Login</CardTitle>
                    <CardDescription>
                        Enter your email below to receive a clickable link to login.
                    </CardDescription>
                {errors && <div className="text-sm text-red-500 pt-2">{errorMessage}</div>}
                </CardHeader>

                <CardContent className="grid gap-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleMagicLinkLogin)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button 
                            disabled={isSubmitting} 
                            className="w-full" 
                            type="submit">
                            {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
                            <Icons.Mail className="mr-2 h-4 w-4" />
                                Submit
                        </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>  
        )}  
        </>
    );
  }
