import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/to-praramx.github.io/',
  plugins: [react(), nodePolyfills()],
  server: {
    watch: {
        usePolling: true
    }
}
})
