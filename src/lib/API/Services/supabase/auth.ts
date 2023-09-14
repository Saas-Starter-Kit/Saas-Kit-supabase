import { SupabaseBrowser as supabase } from '@/lib/API/Services/init/supabase/SupabaseBrowser';

export const SupabaseSignUp = async (email, password) => {
  const res = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`
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
