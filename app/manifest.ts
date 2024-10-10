import { MetadataRoute } from 'next'
import { generalInfomations } from './services/server/globalInformations'
 
export default async function manifest(): Promise<MetadataRoute.Manifest> {

    const infomations = await generalInfomations()


    const data: MetadataRoute.Manifest = {
        name: infomations.empresa.nome,
        short_name: 'MX Fibra',
        description: infomations.empresa.sobre_a_empresa,
        start_url: '/',
        display: 'standalone',
        background_color: '#1e4ed8',
        theme_color: '#1e4ed8',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }

  return data
}