import supabase from '@/lib/config/supabase';

//import type { Database } from '@/lib/database.types'

export default function Signup() {
  const Signup = async (formData: FormData) => {
    'use server';
    const email = formData.get('email').toString();
    const password = formData.get('password').toString();

    await supabase()
      .auth.signUp({
        email,
        password
      })
      .catch((err) => console.log(err));
  };

  return (
    <form action={Signup}>
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button>Sign Up</button>
      {/*<button formAction="/auth/sign-up">Sign Up</button>
      <button formAction="/auth/logout">Sign Out</button>*/}
    </form>
  );
}
