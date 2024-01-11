/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    devIndicators: {
      autoPrerender: false,
    },
    experimental: {
      reactMode: 'concurrent',
    },
  };
  

const withVideos = require("next-videos");

module.exports = withVideos();
