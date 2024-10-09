/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
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
                hostname: 'cms.mxfibra.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'admin.mxfibra.com',
                port: '',
            }

        ],

    },
};

export default nextConfig;
