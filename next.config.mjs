/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.reli.ai' }],
        destination: 'https://reli.ai/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
