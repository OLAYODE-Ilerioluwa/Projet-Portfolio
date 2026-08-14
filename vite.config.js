import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // './' = chemins relatifs : le site marche aussi bien en local que sur
  // GitHub Pages dans un sous-dossier (/mon-repo/) sans rien reconfigurer.
  base: './',
})
