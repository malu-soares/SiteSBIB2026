/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'ufpr.br',
      },
      {
        protocol: 'https',
        hostname: 'simposioensinonasaude.ufcspa.edu.br',
      },
    ],
  },
};

module.exports = nextConfig;