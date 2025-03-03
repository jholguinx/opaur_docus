declare module 'nextra' {
  import { NextConfig } from 'next';

  interface NextraOptions {
      theme: string;
      themeConfig: string;
  }

  type WithNextra = (nextConfig?: NextConfig) => NextConfig;

  const nextra: (options: NextraOptions) => WithNextra;
  export default nextra;
}