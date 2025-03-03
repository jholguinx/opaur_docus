declare module 'nextra' {
  import type { NextConfig } from 'next';

  const nextra: (options?: Record<string, unknown>) => NextConfig;
  export default nextra;
}