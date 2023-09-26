'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/Card';

import UpdateForm from './UpdateForm';

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

const UpdateProfileCard = ({ user, display_name, email }) => {
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

  const onSubmitProfile = async (data) => {
    const id = user.id;
    const display_name = data.display_name;
    await SupabaseProfileUpdate(id, display_name);
  };

  const onSubmitEmail = async (data) => {
    await SupabaseUpdateEmail(data.email);
    // update stripe email
  };

  const onSubmitPassword = async (data) => {
    await SupabaseUpdatePassword(data.password);
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
