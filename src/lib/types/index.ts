export type NavItem = {
  title: string;
  link: string;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  //  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  //  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

//export type UserSubscriptionPlan = SubscriptionPlan &
//  Pick<User, 'stripeCustomerId' | 'stripeSubscriptionId'> & {
//    stripeCurrentPeriodEnd: number;
//    isPro: boolean;
//  };
