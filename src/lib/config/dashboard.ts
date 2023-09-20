import { Icons } from '@/components/Icons';

const configuration = {
  routes: [
    { title: 'Overview', link: '/dashboard/main', icon: Icons.Home },
    { title: 'Todos', link: '/todos/', icon: Icons.Laptop },
    { title: 'settings', link: '/settings', icon: Icons.Settings }
  ],
  subroutes: {
    todos: {
      create: '/create',
      my_todos: '/my-todos',
      list_todos: '/list-todos'
    },
    settings: {
      billing: '/billing',
      profile: '/profile',
      subscription: '/subscription'
    }
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
