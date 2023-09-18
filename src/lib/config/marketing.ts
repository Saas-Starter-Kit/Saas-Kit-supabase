import { Metadata } from 'next';
import siteConfig from './site';

const config = {
  routes: [
    { title: 'home', link: '/' },
    { title: 'FAQ', link: '/faq' },
    { title: 'protected', link: '/protected' },
    { title: 'dashboard', link: '/dashboard' }
  ],
  metadate: {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
    authors: [
      {
        name: ''
      }
    ],
    creator: '',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: ''
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    },
    manifest: `${siteConfig.url}/site.webmanifest`
  }
};

export default config;
