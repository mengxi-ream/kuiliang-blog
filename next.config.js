/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Crayon-ShinChan/blog-posts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
