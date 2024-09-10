/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mxfibra.com',
                port: '',

            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'mx-directus.dsolucoes.com',
                port: '',
            }

        ],

    },
};

export default nextConfig;
