/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MEDIASTACK_KEY: process.env.MEDIASTACK_KEY,
  },
};

module.exports = nextConfig;
