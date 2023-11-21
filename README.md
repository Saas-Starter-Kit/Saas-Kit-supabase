This is a [Next.js](https://nextjs.org/) SaaS boilerplate project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the npm package and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the front page by modifying `app/(marketing).tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

For the Supabase setup, please go to to supabase/migrations/20230927195226_remote_schema.sql. Copy the migration code and paste it in your supabase new project -> SQL Editor -> New Query -> Paste the code -> Run. 

Remember to run the below code in your Supabase -> SQL Editor -> New Query in case authentication doesn't auto create a new user in your Profiles table database.

```
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```
## Authentication

To setup your Google Login, you need to enable it in your Authentication -> Providers -> Google. Need to setup in Google Cloud Console

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
