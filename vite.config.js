
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT:
// If you deploy to https://USERNAME.github.io/REPO, set base to '/REPO/' below.
// If you deploy to https://USERNAME.github.io (user/organization site), set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
