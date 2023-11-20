/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.ipfscdn.io',
      '5f8fb5f583ae1583336e978a2deaf9ed.ipfscdn.io',
    ],
  },
}

module.exports = nextConfig
