import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: env.VITE_BASE_URL || "/",
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL || "")
    }
  }
});
