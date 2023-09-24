'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/Card';

import UpdateForm from './UpdateForm';

import { SupabaseProfileUpdate } from '@/lib/API/Database/profile/Browser/mutations';

import {
  DisplayNameFormValues,
  DisplayNameFormSchema,
  UpdateEmailFormSchema,
  UpdateEmailFormValues,
  UpdatePasswordFormSchema,
  UpdatePasswordFormValues
} from '@/lib/types/validations';

const UpdateProfileCard = ({ user, display_name, email }) => {
  const formDisplayName = useForm<DisplayNameFormValues>({
    resolver: zodResolver(DisplayNameFormSchema),
    defaultValues: {
      display_name
    },
    mode: 'onChange'
  });

  const formEmail = useForm<UpdateEmailFormValues>({
    resolver: zodResolver(UpdateEmailFormSchema),
    defaultValues: {
      email
    },
    mode: 'onChange'
  });

  const formPassword = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(UpdatePasswordFormSchema),
    mode: 'onChange'
  });

  const onSubmitProfile = async (data) => {
    const id = user.id;
    const display_name = data.dis;

    await SupabaseProfileUpdate(id, display_name);
    //toast({
    //  title: 'You submitted the following values:',
    //  description: (
    //    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //      <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //    </pre>
    //  )
    //});
  };

  const onSubmitEmail = (data) => {
    //toast({
    //  title: 'You submitted the following values:',
    //  description: (
    //    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //      <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //    </pre>
    //  )
    //});
  };

  const onSubmitPassword = (data) => {
    //toast({
    //  title: 'You submitted the following values:',
    //  description: (
    //    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //      <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //    </pre>
    //  )
    //});
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
