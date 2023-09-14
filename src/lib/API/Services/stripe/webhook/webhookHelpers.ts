import Stripe from 'stripe';

// stripe event objects for easier manual isolated testing and customization, modify data and pass in directly to WebhookEventHandler() function

/* 
 Webhook triggers can also be used with stripe CLI. Copy and paste into terminal

 stripe.exe trigger checkout.session.completed --add checkout_session:metadata.user_id={user}

 stripe.exe trigger customer.subscription.updated

 stripe.exe trigger invoice.paid

*/

const customerValues = [
  'checkout_session_id',
  'customer_id',
  'customer_email',
  'cusmoter_id',
  'subscription_id',
  'price_id'
];

export { webhookCheckoutEvent, webhookSubscriptionEvent, webhookInvoiceEvent };

const stripePlan: Stripe.Plan = {
  id: 'price_1NqKLuAtqjBKUOx9MmHdW736',
  object: 'plan',
  active: true,
  aggregate_usage: null,
  amount: 1500,
  amount_decimal: '1500',
  billing_scheme: 'per_unit',
  created: 1694716402,
  currency: 'usd',
  interval: 'month',
  interval_count: 1,
  livemode: false,
  metadata: {},
  nickname: null,
  product: 'prod_OdbZpYPI83B8vn',
  tiers_mode: null,
  transform_usage: null,
  trial_period_days: null,
  usage_type: 'licensed'
};

const webhookSubscriptionObject: Stripe.Subscription = {
  id: 'sub_1NqKLuAtqjBKUOx9VLNRiaO9',
  object: 'subscription',
  application: null,
  application_fee_percent: null,
  automatic_tax: {
    enabled: false
  },
  billing_cycle_anchor: 1694716402,
  billing_thresholds: null,
  cancel_at: null,
  cancel_at_period_end: false,
  canceled_at: null,
  cancellation_details: {
    comment: null,
    feedback: null,
    reason: null
  },
  collection_method: 'charge_automatically',
  created: 1694716402,
  currency: 'usd',
  current_period_end: 1697308402,
  current_period_start: 1694716402,
  customer: 'cus_OdbZpLizD4drZB',
  days_until_due: null,
  default_payment_method: null,
  default_source: null,
  default_tax_rates: [],
  description: null,
  discount: null,
  ended_at: null,
  items: {
    object: 'list',
    data: [
      {
        id: 'si_OdbZPR8EX1LpYI',
        object: 'subscription_item',
        billing_thresholds: null,
        created: 1694716403,
        metadata: {},
        plan: stripePlan,
        price: {
          id: 'price_1NqKLuAtqjBKUOx9MmHdW736',
          object: 'price',
          active: true,
          billing_scheme: 'per_unit',
          created: 1694716402,
          currency: 'usd',
          custom_unit_amount: null,
          livemode: false,
          lookup_key: null,
          metadata: {},
          nickname: null,
          product: 'prod_OdbZpYPI83B8vn',
          recurring: {
            aggregate_usage: null,
            interval: 'month',
            interval_count: 1,
            usage_type: 'licensed',
            trial_period_days: 8
          },
          tax_behavior: 'unspecified',
          tiers_mode: null,
          transform_quantity: null,
          type: 'recurring',
          unit_amount: 1500,
          unit_amount_decimal: '1500'
        },
        quantity: 1,
        subscription: 'sub_1NqKLuAtqjBKUOx9VLNRiaO9',
        tax_rates: []
      }
    ],
    has_more: false,
    url: '/v1/subscription_items?subscription=sub_1NqKLuAtqjBKUOx9VLNRiaO9'
  },
  latest_invoice: 'in_1NqKLuAtqjBKUOx9stkGywA6',
  livemode: false,
  metadata: {
    foo: 'bar'
  },
  next_pending_invoice_item_invoice: null,
  on_behalf_of: null,
  pause_collection: null,
  payment_settings: {
    payment_method_options: null,
    payment_method_types: null,
    save_default_payment_method: 'off'
  },
  pending_invoice_item_interval: null,
  pending_setup_intent: null,
  pending_update: null,
  schedule: null,
  start_date: 1694716402,
  status: 'active',
  test_clock: null,
  transfer_data: null,
  trial_end: null,
  trial_settings: {
    end_behavior: {
      missing_payment_method: 'create_invoice'
    }
  },
  trial_start: null
};

// for checkout.session.completed event
const webhookCheckoutEvent = {
  id: 'evt_1NqKmFAtqjBKUOx9FsJk0233',
  object: 'event',
  api_version: '2020-08-27',
  created: 1694718035,
  data: {
    object: {
      id: 'cs_test_a1ZqiOKnkHacA21xYuxYGtwqG1ykpA83whdHKtOGHLdIG4x3RQV7CsVB9M',
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
      customer: 'cus_Odc0Slg4X9BBvy',
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
      payment_intent: 'pi_3NqKmCAtqjBKUOx901ZLKBcf',
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
const webhookInvoiceEvent = {
  id: 'in_1NqLA7AtqjBKUOx9Rt9dk2ZM',
  object: 'invoice',
  account_country: 'US',
  account_name: 'Saas StarterKit',
  account_tax_ids: null,
  amount_due: 1500,
  amount_paid: 0,
  amount_remaining: 1500,
  amount_shipping: 0,
  application: null,
  application_fee_amount: null,
  attempt_count: 0,
  attempted: false,
  auto_advance: false,
  automatic_tax: {
    enabled: false,
    status: null
  },
  billing_reason: 'manual',
  charge: null,
  collection_method: 'charge_automatically',
  created: 1694719515,
  currency: 'usd',
  custom_fields: null,
  customer: 'cus_Ocwl7YD5fWsKxB',
  customer_address: {
    city: null,
    country: 'US',
    line1: null,
    line2: null,
    postal_code: '94066',
    state: null
  },
  customer_email: 'testdddd@yahoo.com',
  customer_name: 'Mo Iqba',
  customer_phone: null,
  customer_shipping: null,
  customer_tax_exempt: 'none',
  customer_tax_ids: [],
  default_payment_method: null,
  default_source: null,
  default_tax_rates: [],
  description: null,
  discount: null,
  discounts: [],
  due_date: null,
  effective_at: null,
  ending_balance: null,
  footer: null,
  from_invoice: null,
  hosted_invoice_url: null,
  invoice_pdf: null,
  last_finalization_error: null,
  latest_revision: null,
  lines: {
    object: 'list',
    data: [
      {
        id: 'il_1NqLA7AtqjBKUOx9NBfg9Q8J',
        object: 'line_item',
        amount: 1500,
        amount_excluding_tax: 1500,
        currency: 'usd',
        description: 'My First Invoice Item (created for API docs)',
        discount_amounts: [],
        discountable: true,
        discounts: [],
        invoice_item: 'ii_1NqLA7AtqjBKUOx9SLlVF8cX',
        livemode: false,
        metadata: {},
        period: {
          end: 1694719515,
          start: 1694719515
        },
        price: {
          id: 'price_1NqKmBAtqjBKUOx9EaucgZ5m',
          object: 'price',
          active: true,
          billing_scheme: 'per_unit',
          created: 1694718031,
          currency: 'usd',
          custom_unit_amount: null,
          livemode: false,
          lookup_key: null,
          metadata: {},
          nickname: null,
          product: 'prod_Odc0tp13SxxBb5',
          recurring: null,
          tax_behavior: 'unspecified',
          tiers_mode: null,
          transform_quantity: null,
          type: 'one_time',
          unit_amount: 1500,
          unit_amount_decimal: '1500'
        },
        proration: false,
        proration_details: {
          credited_items: null
        },
        quantity: 1,
        subscription: webhookSubscriptionObject,
        tax_amounts: [],
        tax_rates: [],
        type: 'invoiceitem',
        unit_amount_excluding_tax: '1500'
      }
    ],
    has_more: false,
    url: '/v1/invoices/in_1NqLA7AtqjBKUOx9Rt9dk2ZM/lines'
  },
  livemode: false,
  metadata: {},
  next_payment_attempt: null,
  number: null,
  on_behalf_of: null,
  paid: false,
  paid_out_of_band: false,
  payment_intent: null,
  payment_settings: {
    default_mandate: null,
    payment_method_options: null,
    payment_method_types: null
  },
  period_end: 1695169455,
  period_start: 1694564655,
  post_payment_credit_notes_amount: 0,
  pre_payment_credit_notes_amount: 0,
  quote: null,
  receipt_number: null,
  rendering_options: null,
  shipping_cost: null,
  shipping_details: null,
  starting_balance: 0,
  statement_descriptor: null,
  status: 'draft',
  status_transitions: {
    finalized_at: null,
    marked_uncollectible_at: null,
    paid_at: null,
    voided_at: null
  },
  subscription: webhookSubscriptionObject,
  subscription_details: {
    metadata: null
  },
  subtotal: 1500,
  subtotal_excluding_tax: 1500,
  tax: null,
  test_clock: null,
  total: 1500,
  total_discount_amounts: [],
  total_excluding_tax: 1500,
  total_tax_amounts: [],
  transfer_data: null,
  webhooks_delivered_at: null
};

// for customer.subscription.updated event
const webhookSubscriptionEvent = {
  id: 'evt_1NqKmFAtqjBKUOx9FsJk0233',
  object: 'event',
  api_version: '2020-08-27',
  created: 1694718035,
  data: webhookSubscriptionObject,
  livemode: false,
  pending_webhooks: 0,
  request: {
    id: null,
    idempotency_key: null
  },
  type: 'customer.subscription.updated'
};
