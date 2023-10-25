<!--
 * @Description: 功能：
 * @Date: 2023-10-23 23:05:51
 * @LastEditTime: 2023-10-26 01:04:18
-->
<template>
  <BarLeft />
  <div class="pageBox">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'
import { nextTick, onMounted } from 'vue'
import BarLeft from '../Component/BarLeft.vue'

onMounted(() => {
  // ipcRenderer 是一个 EventEmitter 的实例。 当在主进程中使用时，它处理从渲染器进程（网页）发送出来的异步和同步信息。 从渲染器进程发送的消息将被发送到该模块。
  // 每当一个渲染进程调用 ipcRenderer.invoke(channel, ...args) 时, ipcMain.handle处理器就会被调用
  nextTick(() => {
    ipcRenderer.invoke('showWindow')
  })
})
</script>

<style scoped lang="scss">
.pageBox {
  flex: 1;
  height: 100%;
  border-top: 1px solid #e6e6e6;
  box-sizing: border-box;
  display: flex;
  margin-top: -1px;
}
</style>
