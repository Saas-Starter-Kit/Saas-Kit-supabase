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
    basic: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC,
    premium: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PREMIUM
  }
};

export default configuration;
