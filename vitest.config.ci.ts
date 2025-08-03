/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// CI-specific Vitest configuration without browser testing
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["react", "react-dom", "markdown-to-jsx"],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: [
        "src/**/*.stories.{ts,tsx}",
        "src/**/*.d.ts",
        "src/test-setup.ts",
      ],
    },
    // Only run basic unit tests, skip browser-based Storybook tests
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["src/**/*.stories.{ts,tsx}"],
  },
});
