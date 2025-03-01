// theme.config.tsx
import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>My Nextra Docs</span>,
  project: {
    link: 'https://github.com/your-repo',
  },
  docsRepositoryBase: 'https://github.com/your-repo/blob/main',
  footer: {
    text: '© 2025 Your Name',
  },
  
};

export default config;
