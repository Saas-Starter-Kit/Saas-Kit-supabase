import Stripe from 'stripe';

// stripe event objects for easier manual isolated testing and customization, modify data and pass in directly to WebhookEventHandler() function

/* 
 Webhook triggers can also be used with stripe CLI. Copy and paste into terminal

 stripe.exe trigger checkout.session.completed --add checkout_session:metadata.user_id=user_039ufdsuhg

 stripe.exe trigger customer.subscription.updated

 stripe.exe trigger invoice.paid

*/

const sampleValues = [
  'checkout_session_id',
  'customer_id',
  'customer_email',
  'cusmoter_id',
  'subscription_id',
  'price_id'
];

export { webhookCheckoutEvent, webhookSubscriptionEvent, webhookInvoiceEvent };

// Stripe.Subscription type is outdated, i.e uses "Plan" interface, so is not used.
const webhookSubscriptionObject = {
  id: 'sub_1NqMUZAtqjBKUOx96N2bv2',
  object: 'subscription',
  application: null,
  application_fee_percent: null,
  automatic_tax: [Object],
  billing_cycle_anchor: 1694724627,
  billing_thresholds: null,
  cancel_at: null,
  cancel_at_period_end: false,
  canceled_at: null,
  cancellation_details: [Object],
  collection_method: 'charge_automatically',
  created: 1694724627,
  currency: 'usd',
  current_period_end: 1697316627,
  current_period_start: 1694724627,
  customer: 'cus_Odcl0j4IFrxK',
  days_until_due: null,
  default_payment_method: null,
  default_source: null,
  default_tax_rates: [],
  description: null,
  discount: null,
  ended_at: null,
  items: [Object],
  latest_invoice: 'in_1NqMUZAtqjBKUOxsfDAHxU',
  livemode: false,
  metadata: [Object],
  next_pending_invoice_item_invoice: null,
  on_behalf_of: null,
  pause_collection: null,
  payment_settings: [Object],
  pending_invoice_item_interval: null,
  pending_setup_intent: null,
  pending_update: null,
  plan: [Object],
  quantity: 1,
  schedule: null,
  start_date: 1694724627,
  status: 'active',
  test_clock: null,
  transfer_data: null,
  trial_end: null,
  trial_settings: [Object],
  trial_start: null
};

// for checkout.session.completed event
const webhookCheckoutEvent: Stripe.Event = {
  id: 'evt_1NqKmFAtqjBOx9FsJk0233',
  object: 'event',
  api_version: '2020-08-27',
  created: 1694718035,
  data: {
    object: {
      id: 'cs_test_a1ZqiOKnkHacA21xYYGtwqG1ykpA83whdHKtOGHLdIG4x3RQV7CsVB9M',
      object: 'checkout.session',
      after_expiration: null,
      allow_promotion_codes: null,
      amount_subtotal: 3000,
      amount_total: 3000,
      automatic_tax: {
        enabled: false,
        status: null
      },
      billing_address_collection: null,
      cancel_url: 'https://httpbin.org/post',
      client_reference_id: null,
      consent: null,
      consent_collection: null,
      created: 1694718032,
      currency: 'usd',
      currency_conversion: null,
      custom_fields: [],
      custom_text: {
        shipping_address: null,
        submit: null
      },
      customer: 'cus_Odc0Slg4XBvy',
      customer_creation: 'always',
      customer_details: {
        address: null,
        email: null,
        name: null,
        phone: null,
        tax_exempt: 'none',
        tax_ids: []
      },
      customer_email: null,
      expires_at: 1694804432,
      invoice: null,
      invoice_creation: {
        enabled: false,
        invoice_data: {
          account_tax_ids: null,
          custom_fields: null,
          description: null,
          footer: null,
          metadata: {},
          rendering_options: null
        }
      },
      livemode: false,
      locale: null,
      metadata: {},
      mode: 'subscription',
      payment_intent: 'pi_3NqKmCqjBKUOx901ZLKBcf',
      payment_link: null,
      payment_method_collection: 'always',
      payment_method_options: {},
      payment_method_types: ['card'],
      payment_status: 'paid',
      phone_number_collection: {
        enabled: false
      },
      recovered_from: null,
      setup_intent: null,
      shipping: null,
      shipping_address_collection: null,
      shipping_options: [],
      shipping_rate: null,
      status: 'complete',
      submit_type: null,
      subscription: webhookSubscriptionObject,
      success_url: 'https://httpbin.org/post',
      total_details: {
        amount_discount: 0,
        amount_shipping: 0,
        amount_tax: 0
      },
      url: null
    }
  },
  livemode: false,
  pending_webhooks: 0,
  request: {
    id: null,
    idempotency_key: null
  },
  type: 'checkout.session.completed'
};

// for invoice.paid event
const webhookInvoiceEvent: Stripe.Event = {
  id: 'evt_3NqMWUAtqjBKUOx90u896',
  object: 'event',
  api_version: '2020-08-27',
  created: 1694724746,
  data: {
    object: {
      id: 'pi_3NqMWUAtqjBKUOx902MZDR',
      object: 'payment_intent',
      amount: 2000,
      amount_capturable: 0,
      amount_details: [Object],
      amount_received: 0,
      application: null,
      application_fee_amount: null,
      automatic_payment_methods: null,
      canceled_at: null,
      cancellation_reason: null,
      capture_method: 'automatic',
      charges: [Object],
      client_secret: 'pi_3NqMWUAtqjOx900Z2MZDR_secret_2oNu1dod1WJtX142WEdROFvrv',
      confirmation_method: 'automatic',
      created: 1694724746,
      currency: 'usd',
      customer: 'cus_OddooR9XhUuD',
      description: 'Payment for Invoice',
      invoice: 'in_1NqMWTAtqjBK9Ns8vuTZQ',
      last_payment_error: null,
      latest_charge: null,
      livemode: false,
      metadata: {},
      next_action: null,
      on_behalf_of: null,
      payment_method: null,
      payment_method_options: [Object],
      payment_method_types: [Array],
      processing: null,
      receipt_email: null,
      review: null,
      setup_future_usage: null,
      shipping: null,
      source: null,
      statement_descriptor: null,
      statement_descriptor_suffix: null,
      status: 'requires_payment_method',
      transfer_data: null,
      transfer_group: null
    }
  },
  livemode: false,
  pending_webhooks: 2,
  request: {
    id: 'req_u0Am1sJu002f',
    idempotency_key: '1506f944-f1768-44dc-ac0c-2e6f0d5b9f08'
  },
  type: 'payment_intent.created'
};

// for customer.subscription.updated event
const webhookSubscriptionEvent: Stripe.Event = {
  id: 'evt_1NqMXwAtqjB9BqCfWrHX',
  object: 'event',
  api_version: '2020-08-27',
  created: 1694724836,
  data: {
    object: webhookSubscriptionObject
  },
  livemode: false,
  pending_webhooks: 2,
  request: {
    id: 'req_t47Ty5dGS4WG',
    idempotency_key: '76dc54-2e3f-42bd-b99c-cf48b2e79ef5'
  },
  type: 'customer.subscription.updated'
};
