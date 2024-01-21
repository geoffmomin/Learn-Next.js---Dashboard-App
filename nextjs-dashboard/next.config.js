/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: [
            'http://localhost',
            'https://wpswpd-3000.csb.app',
          ]
        }
      }
};

module.exports = nextConfig;
