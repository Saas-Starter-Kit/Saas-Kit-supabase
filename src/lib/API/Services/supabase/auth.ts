'client-only';
import { SupabaseBrowser as supabase } from '@/lib/API/Services/init/supabase/SupabaseBrowser';
import config from '@/lib/config/auth';

export const SupabaseSignUp = async (email, password) => {
  const res = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}${config.redirects.callback}`
    }
  });
  return res;
};

export const SupabaseSignIn = async (email, password) => {
  const res = await supabase.auth.signInWithPassword({
    email,
    password
  });

  return res;
};

export const SupabaseSignOut = async () => {
  const res = await supabase.auth.signOut();
  return res;
};

export const SupabaseSignInWithGoogle = async () => {
  const res = supabase.auth.signInWithOAuth({
    provider: 'google'
  });
  return res;
};

export const SupabaseUpdateEmail = async (email) => {
  const res = await supabase.auth.updateUser({ email });
  return res;
};

export const SupabaseUpdatePassword = async (password) => {
  const res = await supabase.auth.updateUser({ password });
  return res;
};

export const SupabaseResetPasswordEmail = async (email) => {
  const redirectTo = `${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/settings/profile`;
  const res = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo
  });
  return res;
};
