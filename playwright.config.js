import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: "./tests/e2e",
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        baseURL: 'http://localhost:3000',
    },
});