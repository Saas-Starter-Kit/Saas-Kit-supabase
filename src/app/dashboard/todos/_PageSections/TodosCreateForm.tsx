'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { todoFormSchema, todoFormValues } from '@/lib/types/validations';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Icons } from '@/components/Icons';
import { CreateTodo } from '@/lib/API/Database/todos/Browser/mutations';
import { toast } from 'react-toastify';
import { User } from '@supabase/supabase-js';

interface TodosCreateFormProps {
  user: User;
  author: string;
}

export default function TodosCreateForm({ user, author }: TodosCreateFormProps) {
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<todoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const {
    reset,
    setError,
    formState: { isSubmitting, errors }
  } = form;

  const onSubmit = async (values: todoFormValues) => {
    const title = values.title;
    const description = values.description;

    const user_id = user?.id;

    const { error } = await CreateTodo(title, description, user_id, author);

    if (error) {
      const type = 'Todo create failed';
      const errorMessage = 'Todo Creation failed, please try again';
      setError('root', {
        type
      });
      setErrorMessage(errorMessage);
      return;
    }

    reset({ title: '', description: '' });
    toast.success('Todo Submitted');
  };

  return (
    <div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">New Todo</CardTitle>
          <CardDescription>Create a Todo with Title and Description</CardDescription>
          {errors && <div className="text-sm text-red-500 pt-2">{errorMessage}</div>}
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isSubmitting} className="w-full">
                {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
