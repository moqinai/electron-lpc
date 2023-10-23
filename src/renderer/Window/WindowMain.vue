<!--
 * @Description: 功能：
 * @Date: 2023-10-23 23:05:51
 * @LastEditTime: 2023-10-23 23:40:23
-->
<template>
  <BarLeft />
  <div class="pageBox">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import BarLeft from '../Component/BarLeft.vue'
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