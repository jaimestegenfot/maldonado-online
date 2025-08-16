/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      't4.ftcdn.net', // Para imágenes de ejemplo
      'images.unsplash.com', // Para imágenes de Unsplash
      'plus.unsplash.com', // Para imágenes de Unsplash
      'res.cloudinary.com', // Para Cloudinary si lo usamos
      'lh3.googleusercontent.com', // Para imágenes de perfil de Google
      'platform-lookaside.fbsbx.com', // Para imágenes de perfil de Facebook
    ],
  },
};

module.exports = nextConfig; 