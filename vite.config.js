import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base:
    command === 'build' && process.env.GITHUB_PAGES === 'true'
      ? '/sejaljulme/'
      : '/',
}));