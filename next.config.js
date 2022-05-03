/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_BASE_PATH: 'https://jsonplaceholder.typicode.com',
    API_KEY: '/',
  },
};

module.exports = nextConfig;
