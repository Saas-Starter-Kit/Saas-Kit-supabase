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
    successAuth: '/dashboard/main',
    purchaseSuccess: '/dashboard/main',
    purchaseCancel: '/auth/cancel',
    callback: '/auth/callback'
  }
};

export default config;
