import 'server-only';
import { SupabaseRouteHandler as supabase } from '@/lib/API/Services/init/supabase/SupabaseRouteHandler';
import { toDateTime } from '@/lib/utils/helpers';
import stripe from '@/lib/API/Services/init/stripeServer';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

const subscriptionStatusActive = { trailing: 'trailing', active: 'active' };
const subscriptionStatusVoid = {
  past_due: 'past_due',
  canceled: 'canceled',
  unpaid: 'unpaid',
  incomplete_expired: 'incomplete_expired'
};

const WebhookEvents = {
  subscription_updated: 'customer.subscription.updated',
  checkout_session_completed: 'checkout.session.completed'
};

export const WebhookEventHandler = async (event) => {
  // Handle the event
  switch (event.type) {
    case WebhookEvents.checkout_session_completed:
      //save to db: customer_id, subscription_id, price_id, status, next_billng date,

      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      console.log(event);

      // get subs from stripe api
      // update subs table in db with sub id, price, etc.
      // update user in db with customer_id and subs_id

      //lookup up plan type basic, premium by price id. Save to db.
      break;
    case WebhookEvents.subscription_updated:
      // update subscription handler
      // compare previous attribs object and then update own db with it.

      // catch updates: start trail, start active, cancel, unpaid, past_due, incomplete_expired.
      // new billing period starts.

      const subscription = event.data.object as Stripe.Subscription;
      console.log(event.data.object.plan);

      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
};

const createSubscription = async (user_id, stripe_customer_id) => {
  //  const { data, error } = await supabase
  //    .from('profile')
  //    .select('stripe_customer_id')
  //    .eq('id', uuid)
  //    .single();
  // call after active subscription event
  // Update user table with stripe_customer_id
  // Update Subscription Status of user in DB.
};

const UpdateUserSubscription = () => {};

const DeleteUserSubscription = () => {};

const isUserSubscriptionValid = () => {
  //comapre anchor billdate to current date to adjust subscription status as needed
};
