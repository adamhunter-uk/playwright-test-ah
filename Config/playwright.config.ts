import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: 'retain-on-failure', // other options: 'on', 'off', 'retain-on-failure', 'on-first-retry'
    screenshot: 'only-on-failure', // or 'on', 'off'
  },
  
});
