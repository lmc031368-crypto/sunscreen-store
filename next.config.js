/** @type {import('next').NextConfig} */
const nextConfig = {
  // 强制 Next.js 采用静态生成模式，有助于解决 Vercel 的权限拦截问题
  output: 'standalone',
}

module.exports = nextConfig
