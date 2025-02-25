import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TorPortefolje/', // <--- Endre dette til ditt repo-navn
})
