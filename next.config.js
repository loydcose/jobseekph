/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-service-cdn.seek.com.au",
      },
    ],
  },
}

module.exports = nextConfig
