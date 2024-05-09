/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = {
//   images: {
//     domains: ['images.pexels.com'],
//   },
// };

// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/accueil', 
        permanent: true,
      },
    ]
  },
};
