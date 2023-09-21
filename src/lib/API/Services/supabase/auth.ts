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
    provider: 'google',
  })
  return res;
  };