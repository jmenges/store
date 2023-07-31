/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cdn.shopify.com"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      require("unplugin-icons/webpack")({
        compiler: "jsx",
        jsx: "react",
        extension: "jsx",
      })
    );
    return config;
  },
};

module.exports = nextConfig;
