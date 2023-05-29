import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    hmr : true,
    port : 3001,
    proxy : {
      '/api' : {
        target : "", //目标代理接口地址 - 服务器地址
        secure : false,
        changeOrigin : true, //开启代理， 在本地创建一个虚拟服务器
        cookiePathRewrite : {
          '^/api' : '/api',
        },
      },
    },
  },
  resolve : {
    alias : {
      '@' : path.resolve(__dirname, './src'),
    }
  }
})
