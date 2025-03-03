declare module 'nextra' {
  import type { NextConfig } from 'next';

  const withNextra: (options?: object) => NextConfig;
  export default withNextra;
}