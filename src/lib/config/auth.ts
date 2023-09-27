const config = {
  routes: {
    login: {
      link: '/auth/login'
    },
    signup: {
      link: '/auth/signup'
    },
    forgotPassword: {
      link: '/auth/forgot-password'
    },
    magiclink: {
      link: '/auth/magic-link'
    }
  },
  redirects: {
    toDashboard: '/dashboard/main',
    toSubscription: '/dashboard/settings/subscription',
    toBilling: '/dashboard/settings/billing',
    requireAuth: '/auth/auth-required',
    callback: '/api/auth-callback'
  }
};

export default config;
