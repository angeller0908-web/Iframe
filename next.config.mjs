/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.onlinegames.io",
        pathname: "/media/**"
      },
      {
        protocol: "https",
        hostname: "cloud.onlinegames.io",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
