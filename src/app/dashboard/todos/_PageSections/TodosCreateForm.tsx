'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { todoFormSchema } from '@/lib/types/validations';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

import { CreateTodo } from '@/lib/API/Database/todos/Browser/mutations';

export default function TodosCreateForm({ user }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema)
  });

  const onSubmit = async (values: z.infer<typeof todoFormSchema>) => {
    const title = values.title;
    const description = values.description;

    const user_id = user?.id;
    const user_email = user?.email;

    const res = await CreateTodo(title, description, user_id, user_email);
    console.log(res);
  };

  return (
    <div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">New Todo</CardTitle>
          <CardDescription>Create a Todo with Title and Description</CardDescription>
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
              <Button className="w-full">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
