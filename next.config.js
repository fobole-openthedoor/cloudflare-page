/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 由于是静态导出，我们禁用图片优化
  images: {
    unoptimized: true,
  },
  // 确保生成的静态文件可以在任何路径下访问
  basePath: '',
  // 禁用严格模式以避免开发时的双重渲染
  reactStrictMode: false,
}

module.exports = nextConfig
