'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/Card';

import UpdateForm from './UpdateForm';
import axios from 'axios';
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

const UpdateProfileCard = ({ user, display_name, email, customer }) => {
  const formDisplayName = useForm<DisplayNameFormValues>({
    resolver: zodResolver(DisplayNameFormSchema),
    defaultValues: {
      display_name
    }
  });

  const formEmail = useForm<EmailFormValues>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email
    }
  });

  const formPassword = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(UpdatePasswordFormSchema),
    defaultValues: {
      password: ''
    }
  });

  // handle types
  const onSubmitProfile = async (data) => {
    const id = user.id;
    const display_name = data.display_name;
    const { error } = await SupabaseProfileUpdate(id, display_name);
    return error;
  };

  const onSubmitEmail = async (data) => {
    const email = data.email;
    const { error } = await SupabaseUpdateEmail(email);
    if (error) return error;

    try {
      await axios.post('/api/stripe/customer', { customer, email });
    } catch (err) {
      return { type: 'Stripe Error', message: 'Stripe Update Failed' };
    }
  };

  const onSubmitPassword = async (data) => {
    const { error } = await SupabaseUpdatePassword(data.password);
    return error;
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Update Account</CardTitle>
          <CardDescription>Update Account display name, email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <UpdateForm
            form={formDisplayName}
            onSubmit={onSubmitProfile}
            label="Display Name"
            description="This is your public display name."
            button_text="Update Profile"
            name="display_name"
            input_type="text"
          />

          <UpdateForm
            form={formEmail}
            onSubmit={onSubmitEmail}
            label="Email"
            description="This is the email associated your account"
            button_text="Update Email"
            name="email"
            input_type="text"
          />

          <UpdateForm
            form={formPassword}
            onSubmit={onSubmitPassword}
            label="Password"
            description="Update Account Password"
            button_text="Update Password"
            name="password"
            input_type="password"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProfileCard;
