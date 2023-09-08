import supabase from '@/lib/config/supabase';

//import type { Database } from '@/lib/database.types'

export default function Signin() {
  const Signin = async (formData: FormData) => {
    'use server';
    const email = formData.get('email').toString();
    const password = formData.get('password').toString();

    await supabase()
      .auth.signInWithPassword({
        email,
        password
      })
      .catch((err) => console.log(err));
  };

  return (
    <form action={Signin}>
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button>Sign Up</button>
    </form>
  );
}
