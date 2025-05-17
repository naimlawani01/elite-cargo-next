/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Désactiver le mode strict pour l'export statique
  reactStrictMode: false,
}

module.exports = nextConfig 