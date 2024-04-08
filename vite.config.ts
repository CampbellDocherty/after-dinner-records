import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
  },
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: "/adr",
    define: {
      'process.env.PUBLIC_URL': JSON.stringify(env.PUBLIC_URL)
    },
    plugins: [react()],
    ...vitestConfig
  }
})