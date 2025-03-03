declare module 'nextra' {
  import type { NextConfig } from 'next';

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const nextra: (options?: any) => NextConfig;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  export default nextra;
}