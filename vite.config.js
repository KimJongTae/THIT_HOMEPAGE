import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
const entries=['index.html','company/index.html','services/index.html','ai/index.html','approach/index.html','contact/index.html']
export default defineConfig({
  plugins:[vue()],
  cacheDir:'.vite-cache',
  server:{host:'0.0.0.0'},
  build:{rollupOptions:{input:entries.map(entry=>fileURLToPath(new URL(entry,import.meta.url)))}}
})
