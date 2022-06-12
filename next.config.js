/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'www.uamxela.org', 'firebasestorage.googleapis.com']
  }, 
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
