import { Metadata } from 'next';

const config = {
  routes: [
    { title: 'home', link: '/' },
    { title: 'auth', link: '/auth' },
    { title: 'protected', link: '/protected' },
    { title: 'create-todo', link: '/todos/create-todo' },
    { title: 'list-todos', link: '/todos/list-todos' },
    { title: 'my-todos', link: '/todos/my-todos' },
    { title: 'profile', link: '/profile' },
    { title: 'pricing', link: '/subscription' }
  ],
  metadata: {}
};

export default config;
