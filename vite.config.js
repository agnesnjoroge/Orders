import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }


/*export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    base: "./",
  },
})*/

if (command !== 'serve') {
    config.base = '/Orders/'
  }

  return config
})