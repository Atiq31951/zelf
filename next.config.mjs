/** @type {import('next').NextConfig} */

// import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
};

export default nextConfig;