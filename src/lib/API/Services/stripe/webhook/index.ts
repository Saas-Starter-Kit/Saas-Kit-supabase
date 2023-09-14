import 'server-only';
import { SupabaseRouteHandler as supabase } from '@/lib/API/Services/init/supabase/SupabaseRouteHandler';
import { toDateTime } from '@/lib/utils/helpers';
import stripe from '@/lib/API/Services/init/stripeServer';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

const subscriptionStatusActive = ['trailing', 'active'];
const subscriptionStatusNone = ['past_due', 'canceled', 'unpaid'];

export const WebhookEventHandler = async (event) => {
  // Handle the event
  switch (event.type) {
    case 'customer.subscription.updated':
      // if()
      // verify active status is saved in db.
      // first purchase will be handled by checkout session completed

      // if(unpaid, canceled, past_due)
      // revoke access

      //emails and notifications handled by stripe
      const subscriptionobj = event.data.object as Stripe.Subscription;

      const subscription = await stripe.subscriptions.update('sub_49ty4767H20z6a', {
        cancel_at_period_end: true
      });

      //lookup up plan type basic, premium by price id. Save to db.
      break;
    case 'checkout.session.completed':
      // Payment is successful and the subscription is created.
      // used for initial subscription creation, user id is included to metadata, use user id to save to db
      // You should provision the subscription and save the customer ID to your database.
      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      //  console.log(checkoutSession);
      if (checkoutSession.mode === 'subscription') {
        const subscriptionId = checkoutSession.subscription;
      }
      break;
    case 'invoice.paid':
      // Continue to provision the subscription as payments continue to be made.
      // Store the status in your database and check when a user accesses your service.
      // This approach helps you avoid hitting rate limits.

      // update billing end date in own db + 1 day for leeway
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
