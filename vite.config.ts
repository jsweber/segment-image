import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export const resolvePath = (p: string) => path.resolve(__dirname, p);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@components': resolvePath('./src/components'),
      '@lib': resolvePath('./src/lib'),
    }
  }
})
