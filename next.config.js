/** @type {import('next').NextConfig} */
const nextConfig = {
  // 强制 Next.js 以正确的方式打包，解决 403 权限问题
  output: 'standalone',
}

module.exports = nextConfig
