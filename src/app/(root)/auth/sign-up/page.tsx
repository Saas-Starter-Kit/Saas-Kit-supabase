export default function Login() {
  return (
    <form action="/api/auth/sign-up" method="post">
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
