import { Icons } from '@/components/Icons';

const configuration = {
  routes: [
    { title: 'Overview', link: '/dashboard/main', icon: Icons.Home },
    { title: 'Todos', link: '/dashboard/todos/create', icon: Icons.Laptop },
    { title: 'settings', link: '/dashboard/settings/profile', icon: Icons.Settings }
  ],
  subroutes: {
    todos: {
      create: '/dashboard/todos/create',
      my_todos: '/dashboard/todos/my-todos',
      list_todos: '/list-todos'
    },
    settings: [
      { title: 'Billing', link: '/dashboard/settings/billing' },
      { title: 'Profile', link: '/dashboard/settings/profile' },
      { title: 'Subscription', link: '/dashboard/settings/subscription' }
    ]
  },
  subscriptionPlans: {
    yearly: {
      premium: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PREMIUM_YEARLY,
        price: '200.00',
        product: 'Premium Yearly Plan'
      },
      basic: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC_YEARLY,
        price: '100.00',
        product: 'Basic Yearly Plan'
      }
    },
    monthly: {
      premium: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PREMIUM_MONTHLY,
        price: '20.00',
        product: 'Premium Monthly Plan'
      },
      basic: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC_MONTHLY,
        price: '10.00',
        product: 'Basic Monthly Plan'
      }
    }
  }
};

export default configuration;
