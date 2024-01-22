/*
 * @Author: liaozhaozhou liaozhaozhou@ecyao.com
 * @Date: 2024-01-22 11:23:42
 * @LastEditors: liaozhaozhou liaozhaozhou@ecyao.com
 * @LastEditTime: 2024-01-22 14:56:07
 * @FilePath: /react-demo/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 别名
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
