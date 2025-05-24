import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://chessfantazy.com',
    headless: false, // Set to true for CI
  },
});
