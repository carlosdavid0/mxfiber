import { MetadataRoute } from 'next'


const url = 'https://mxfibra.com'


function agregate(path:string){
    return `${url}/${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: agregate('/'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: agregate('/institucional'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: agregate('/privacidade'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
   
  ]
}