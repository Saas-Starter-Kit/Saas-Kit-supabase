import 'server-only';
import { SupabaseRouteHandler as supabase } from '@/lib/API/Services/init/supabase/SupabaseRouteHandler';
import stripe from '@/lib/API/Services/init/stripe';
import Stripe from 'stripe';
import { RetrieveSubscription } from '..';

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

// Imported Stripe Event object has incorrect types, set here instead
type StripeEvent = {
  type: string;
  data: {
    object: {
      id: string;
      metadata: {
        user_id: string;
      };
      subscription: string;
      status: string;
    };
    previous_attributes: object | null;
  };
};

export const WebhookEventHandler = async (event: StripeEvent) => {
  // Handle the event
  switch (event.type) {
    case WebhookEvents.checkout_session_completed:
      const session = event.data.object;

      const user_db_id = session.metadata.user_id;

      //import and replace
      const subscription: Stripe.Subscription = await RetrieveSubscription(session.subscription);

      const stripe_customer_id = subscription.customer;

      const dataSub = {
        id: subscription.id,
        price_id: subscription.items.data[0].price.id,
        status: subscription.status,
        created_at: new Date(Date.now()),
        period_starts_at: new Date(subscription.current_period_start * 1000),
        period_ends_at: new Date(subscription.current_period_end * 1000)
      };

      await supabase().from('subscriptions').insert(dataSub);

      const dataUser = {
        stripe_customer_id,
        subscription_id: subscription.id
      };

      await supabase().from('profiles').update(dataUser).eq('id', user_db_id);

      break;
    case WebhookEvents.subscription_updated:
      // refator for simplicity
      // wat does previous_attributes look like for price update

      const subscriptionUpdate = event.data.object;
      const UpdatedCols = Object.keys(event.data.previous_attributes);

      const validColumns = [
        'price_id',
        'status',
        'created_at',
        'period_starts_at',
        'period_ends_at'
      ];

      const validUpdatedCols = UpdatedCols.filter((element) => validColumns.includes(element));

      let dataUpdate = {};
      validUpdatedCols.map((item) => {
        dataUpdate[item] = subscriptionUpdate[item];
      });

      let status;
      if (UpdatedCols.includes('status')) {
        const validStatus = [
          ...Object.keys(subscriptionStatusActive),
          ...Object.keys(subscriptionStatusVoid)
        ];

        if (validStatus.includes(subscriptionUpdate.status)) {
          status = subscriptionUpdate.status;
        }
      }

      if (status) dataUpdate['status'] = status;

      if (Object.keys(dataUpdate).length !== 0) {
        await supabase().from('subscriptions').update(dataUpdate).eq('id', subscriptionUpdate.id);
      }

      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
};
