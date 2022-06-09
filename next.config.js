/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'www.uamxela.org']
  }, 
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
