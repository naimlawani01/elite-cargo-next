/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Désactiver le mode strict pour l'export statique
  reactStrictMode: false,
  // Configuration pour le déploiement statique
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 