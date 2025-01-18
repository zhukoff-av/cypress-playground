import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    screenshotOnRunFailure: false,
  },
});
