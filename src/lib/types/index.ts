import { Session, User } from '@supabase/supabase-js';

import { AuthError } from '@supabase/supabase-js';
import { LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  link: string;
};

export type NavItemSidebar = {
  title: string;
  link: string;
  icon: LucideIcon;
};

export type TSupabaseUserSession =
  | {
      user: User;
      session: Session;
    }
  | {
      user: null;
      session: null;
    };

export interface SupabaseAuthErrorProps {
  error: AuthError;
  data: TSupabaseUserSession;
  email: string;
}

export interface SupbaseAuthError {
  isError: boolean;
}
