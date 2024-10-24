/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/map/event_bangalore",
  trailingSlash: false,
  experimental: {
    cssChunking: "loose",
  },
};

export default nextConfig;
