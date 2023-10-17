/*
 * @Author: lipengcheng
 * @Date: 2023-10-17 11:06:31
 * @LastEditTime: 2023-10-17 16:25:36
 * @Description: 
 */
// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
