/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-service-cdn.seek.com.au",
      },
      {
        protocol: "https",
        hostname: "siva.jsstatic.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `http://localhost:5000/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
