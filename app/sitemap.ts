import { MetadataRoute } from 'next'



export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: '/institucional',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/privacidade',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
   
  ]
}