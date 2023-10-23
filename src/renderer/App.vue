<!--
 * @Author: lipengcheng
 * @Date: 2023-10-16 14:41:52
 * @LastEditTime: 2023-10-23 23:47:25
-->

<template>
  <div>
    <router-view />
  </div>
  <!-- <HelloWorld msg="Vite + Vue" />123 -->
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

import fs from 'fs'
import { ipcRenderer } from 'electron'
import { onMounted } from 'vue'

onMounted(() => {
  console.log(fs)
  console.log(ipcRenderer)
})
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
