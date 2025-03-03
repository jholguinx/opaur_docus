// next.config.ts
import nextra from 'nextra';
import { NextConfig } from 'next';

const withNextra: (nextConfig?: NextConfig) => NextConfig = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default withNextra({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
});