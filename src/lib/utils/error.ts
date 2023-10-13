import { AuthError, PostgrestError } from '@supabase/supabase-js';
import Stripe from 'stripe';

export const handleError = (error: any) => {
  //general or custom error handler
  throw error;
};

export const StripeError = (err: Stripe.errors.StripeError) => {
  if (err instanceof Stripe.errors.StripeError) {
  }
  console.log(err);
  // switch (e.type) {
  //      case 'StripeCardError':
  //        console.log(`A payment error occurred: ${e.message}`);
  //        break;
  //      case 'StripeInvalidRequestError':
  //        console.log('An invalid request occurred.');
  //        break;
  //      default:
  //        console.log('Another problem occurred, maybe unrelated to Stripe.');
  //        break;
};

export const SupabaseAuthError = (err: AuthError) => {
  if (err) throw new Error(err.message);
};

export const SupabaseDBError = (err: PostgrestError) => {
  if (err) throw new Error(err.message);
};

export const AxiosError = () => {};
