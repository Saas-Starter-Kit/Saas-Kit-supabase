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

const UpdateForm = ({ form, onSubmit, label, description, button_text, name, input_type }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    setError,
    formState: { isSubmitting, errors }
  } = form;

  const handleSubmit = async (data) => {
    const error = await onSubmit(data);
    if (error) {
      setError('root', {
        type: error.name
      });
      setErrorMessage(error.message);
      return;
    }
    toast.success('Update Completed');
  };

  return (
    <div className="mt-4 mb-10">
      {errors && <div className="text-sm text-red-500 mb-3">{errorMessage}</div>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input type={input_type} {...field} />
                </FormControl>
                <FormDescription>{description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isSubmitting} className="mt-4">
            {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
            {button_text}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateForm;
