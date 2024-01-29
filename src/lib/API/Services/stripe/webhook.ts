import 'server-only';
import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase';
import Stripe from 'stripe';
import { RetrieveSubscription } from './customer';
import { StripeEvent } from '@/lib/types/stripe';

const WebhookEvents = {
  subscription_updated: 'customer.subscription.updated',
  checkout_session_completed: 'checkout.session.completed'
};

export const WebhookEventHandler = async (event: StripeEvent) => {
  // Handle the event
  switch (event.type) {
    case WebhookEvents.checkout_session_completed: {
      const session = event.data.object;

      const user_db_id = session.metadata.user_id;

      const subscription: Stripe.Subscription = await RetrieveSubscription(session.subscription);

      const stripe_customer_id = subscription.customer as string;
      const statusSub = subscription.status as string;

      const dataSub = {
        id: subscription.id,
        price_id: subscription.items.data[0].price.id,
        status: statusSub,
        created_at: new Date(Date.now()).toString(),
        period_starts_at: new Date(subscription.current_period_start * 1000).toString(),
        period_ends_at: new Date(subscription.current_period_end * 1000).toString()
      };

      const subscriptionRes = await supabase().from('subscriptions').insert(dataSub);
      if (subscriptionRes?.error) throw subscriptionRes.error;

      const dataUser = {
        stripe_customer_id,
        subscription_id: subscription.id
      };

      const profileRes = await supabase().from('profiles').update(dataUser).eq('id', user_db_id);
      if (profileRes?.error) throw profileRes.error;

      console.log('Stripe Customer Successfully Created');
      break;
    }
    case WebhookEvents.subscription_updated: {
      // Incorrect infered type, need to override.
      const subscription = event.data.object as unknown as Stripe.Subscription;

      const dataSub = {
        id: subscription.id,
        price_id: subscription.items.data[0].price.id,
        status: subscription.status,
        created_at: new Date(Date.now()).toString(),
        period_starts_at: new Date(subscription.current_period_start * 1000).toString(),
        period_ends_at: new Date(subscription.current_period_end * 1000).toString()
      };

      const { error } = await supabase()
        .from('subscriptions')
        .update(dataSub)
        .eq('id', subscription.id);

      if (error) throw error;

      break;
    }
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
};

/* 

Webhook triggers can be triggered by stripe CLI to similate webhook events. Copy and paste into terminal.

stripe.exe trigger checkout.session.completed --add checkout_session:metadata.user_id={REPLACE WITH A SUPABASE USER ID}

stripe.exe trigger customer.subscription.updated

stripe.exe trigger invoice.paid

ngrok setup can also be used to directly trigger events from the app. See ngrok stripe webhook guide.
*/
