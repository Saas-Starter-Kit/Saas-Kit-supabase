'use client';

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

const UpdateForm = ({ form, onSubmit, label, description, button_text, name, input_type }) => {
  return (
    <div className="mt-4 mb-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <Button className="mt-4" type="submit">
            {button_text}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateForm;
