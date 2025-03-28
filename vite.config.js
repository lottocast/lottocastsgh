import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // public/index.html을 entry point로 인식하도록 설정
  build: {
    rollupOptions: {
      input: 'public/index.html',
    },
    outDir: 'dist',
  },
  publicDir: false, // public 디렉토리는 static 처리 안 하도록 막기
  plugins: [react()],
})
