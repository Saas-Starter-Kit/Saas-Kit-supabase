import { Icons } from '@/components/Icons';

const configuration = {
  routes: [
    { title: 'Overview', link: '/dashboard/main', icon: Icons.Home },
    { title: 'Todos', link: '/dashboard/todos/create', icon: Icons.Laptop },
    { title: 'Settings', link: '/dashboard/settings/profile', icon: Icons.Settings }
  ],
  subroutes: {
    todos: [
      { title: 'Create', link: '/dashboard/todos/create' },
      { title: 'My Todos', link: '/dashboard/todos/my-todos' },
      { title: 'All Todos', link: '/dashboard/todos/list-todos' }
    ],
    settings: [
      { title: 'Profile', link: '/dashboard/settings/profile' },
      { title: 'Billing', link: '/dashboard/settings/billing' },
      { title: 'Subscription', link: '/dashboard/settings/subscription' }
    ]
  },
  subscriptionPlans: {
    yearly: {
      premium: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PREMIUM_YEARLY,
        price: '200',
        product: 'Premium',
        features: ['Unlimited Posts', 'Unlimited Users', 'Priority Support']
      },
      basic: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC_YEARLY,
        price: '100',
        product: 'Basic',
        features: ['Unlimited Posts', '10 Users', 'Email Support']
      }
    },
    monthly: {
      premium: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PREMIUM_MONTHLY,
        price: '20',
        product: 'Premium',
        features: ['Unlimited Posts', 'Unlimited Users', 'Priority Support']
      },
      basic: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC_MONTHLY,
        price: '10',
        product: 'Basic',
        features: ['Unlimited Posts', '10 Users', 'Email Support']
      }
    }
  }
};

export default configuration;
