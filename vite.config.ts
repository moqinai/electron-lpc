/*
 * @Author: lipengcheng
 * @Date: 2023-10-16 14:41:52
 * @LastEditTime: 2023-10-26 01:35:14
 * @Description:
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { devPlugin, getReplacer } from './plugins/devPlugin'
import { buildPlugin } from './plugins/buildPlugin'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import DefineOptions from 'unplugin-vue-define-options/vite'
import ElementPlus from 'unplugin-element-plus/vite'

import optimizer from 'vite-plugin-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      useSource: true,
    }),
    optimizer(getReplacer()),
    devPlugin(),
  ],
  build: {
    rollupOptions: {
      plugins: [buildPlugin()],
    },
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: '/src/',
        // replacement: join(__dirname, 'src')
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        // additionalData: '@import "@/assets/scss/global.scss";'
        // additionalData: '@use "@/assets/scss/global.scss" as *;'
      },
    },
  },
})
