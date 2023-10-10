'use client';

import { useState } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/Form';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Icons } from '@/components/Icons';
import { toast } from 'react-toastify';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SupabaseProfileUpdate } from '@/lib/API/Database/profile/Browser/mutations';
import { SupabaseUpdateEmail, SupabaseUpdatePassword } from '@/lib/API/Services/supabase/auth';

import {
  DisplayNameFormValues,
  DisplayNameFormSchema,
  EmailFormSchema,
  EmailFormValues,
  UpdatePasswordFormSchema,
  UpdatePasswordFormValues
} from '@/lib/types/validations';

import { UpdateStripeCustomer } from '@/lib/API/Routes/stripe/stripe';
import { User } from '@supabase/supabase-js';
import { ErrorText } from '@/components/ErrorText';

interface UpdateDisplayNamePropsI {
  display_name: string;
  user: User;
}

export const UpdateDisplayName = ({ display_name, user }: UpdateDisplayNamePropsI) => {
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<DisplayNameFormValues>({
    resolver: zodResolver(DisplayNameFormSchema),
    defaultValues: {
      display_name
    }
  });

  const {
    setError,
    formState: { isSubmitting }
  } = form;

  const handleSubmit = async (data: DisplayNameFormValues) => {
    const id = user.id;
    const display_name = data.display_name;
    const { error } = await SupabaseProfileUpdate(id, display_name);

    if (error) {
      setError('root', {
        type: 'Postgres Error'
      });
      setErrorMessage(error.message);
      return;
    }
    toast.success('Update Completed');
  };

  return (
    <div className="mt-4 mb-10">
      <ErrorText errorMessage={errorMessage} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="display_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Display Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isSubmitting} className="mt-4">
            {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Update Profile
          </Button>
        </form>
      </Form>
    </div>
  );
};

interface UpdateEmailPropsI {
  email: string;
  customer: string;
}

export const UpdateEmail = ({ email, customer }: UpdateEmailPropsI) => {
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email
    }
  });

  const {
    setError,
    formState: { isSubmitting }
  } = form;

  const handleSubmit = async (data: EmailFormValues) => {
    const email = data.email;
    const { error } = await SupabaseUpdateEmail(email);

    await UpdateStripeCustomer(customer, email);

    if (error) {
      setError('root', {
        type: 'Postgres Error'
      });
      setErrorMessage(error.message);
      return;
    }
    toast.success('Update Completed');
  };

  return (
    <div className="mt-4 mb-10">
      <ErrorText errorMessage={errorMessage} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormDescription>This is the email associated with your account</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isSubmitting} className="mt-4">
            {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Update Email
          </Button>
        </form>
      </Form>
    </div>
  );
};

export const UpdatePassword = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(UpdatePasswordFormSchema),
    defaultValues: {
      password: ''
    }
  });

  const {
    setError,
    formState: { isSubmitting }
  } = form;

  const handleSubmit = async (data: UpdatePasswordFormValues) => {
    const { error } = await SupabaseUpdatePassword(data.password);

    if (error) {
      setError('root', {
        type: 'Postgres Error'
      });
      setErrorMessage(error.message);
      return;
    }
    toast.success('Update Completed');
  };

  return (
    <div className="mt-4 mb-10">
      <ErrorText errorMessage={errorMessage} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormDescription>Update Account Password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isSubmitting} className="mt-4">
            {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Update Password
          </Button>
        </form>
      </Form>
    </div>
  );
};
