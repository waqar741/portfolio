import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const AI_BOTS = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'PerplexityBot',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot'
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/preview/'],
      },
      {
        userAgent: AI_BOTS,
        allow: '/',
      }
    ],
    sitemap: 'https://www.waquarshaikh.me/sitemap.xml',
    host: 'https://www.waquarshaikh.me',
  };
}
