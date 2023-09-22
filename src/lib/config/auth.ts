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
    }
  },
  redirects: {
    successLoginAuth: '/dashboard/main',
    successSignUpAuth: 'dashboard/settings/subscription',
    purchaseSuccess: '/dashboard/settings/billing',
    purchaseCancel: '/dashboard/settings/subscription',
    callback: '/auth/callback'
  }
};

export default config;
