/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ibb.co',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
        ],
      },
};

export default nextConfig;
