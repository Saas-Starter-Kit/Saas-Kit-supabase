const configuration = {
  routes: [
    { title: 'home', link: '/' },
    { title: 'auth', link: '/auth' },
    { title: 'protected', link: '/protected' },
    { title: 'create-todo', link: '/todos/create-todo' },
    { title: 'list-todos', link: '/todos/list-todos' },
    { title: 'my-todos', link: '/todos/my-todos' },
    { title: 'profile', link: '/profile' },
    { title: 'pricing', link: '/subscription' }
  ],

  domain: process.env.NEXT_PUBLIC_DOMAIN,
  subscriptionPlans: {
    yearly: {
      premium: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PREMIUM_YEARLY,
        price: '200.00',
        product: 'Premium Plan'
      },
      basic: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC_YEARLY,
        price: '100.00',
        product: 'Basic Plan'
      }
    },
    monthly: {
      premium: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PREMIUM_MONTHLY,
        price: '20.00',
        product: 'Premium Plan'
      },
      basic: {
        price_id: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC_MONTHLY,
        price: '10.00',
        product: 'Basic Plan'
      }
    }
  }
};

export default configuration;
