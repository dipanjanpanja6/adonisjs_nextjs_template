const isDev = process.env.NODE_ENV === 'development'

// Load environment variables from .env, .env.local, etc. This explicit call into `@next/env` allows using environment variables before next() is called.
// More info: https://nextjs.org/docs/basic-features/environment-variables
const { loadedEnvFiles, combinedEnv } = require('@next/env').loadEnvConfig(
  __dirname,
  isDev,
  undefined,
  true
)

// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: !isDev,
  output: 'standalone',
}

export default nextConfig
