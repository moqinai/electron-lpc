<!--
 * @Description: 功能：
 * @Date: 2023-10-17 23:11:34
 * @LastEditTime: 2023-10-26 00:49:45
-->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { createDialog } from '../common/Dialog'

let mainWindowRoutes = ref([
  { path: `/WindowMain/Chat`, isSelected: true, icon: `icon-chat`, iconSelected: `icon-chat` },
  { path: `/WindowMain/Contact`, isSelected: false, icon: `icon-tongxunlu1`, iconSelected: `icon-tongxunlu` },
  { path: `/WindowMain/Collection`, isSelected: false, icon: `icon-shoucang1`, iconSelected: `icon-shoucang` },
])
let route = useRoute()
watch(
  () => route,
  () => mainWindowRoutes.value.forEach(v => (v.isSelected = v.path === route.fullPath)),
  {
    immediate: true,
    deep: true,
  },
)

let openSettingWindow = async () => {
  console.log('123123')
  let config = { modal: true, width: 800, webPreferences: { webviewTag: false } }
  let dialog = await createDialog(`/WindowSetting/AccountSetting`, config)
  window.addEventListener('message', e => {
    console.log(e.data)
  })
  let msg = { msgName: 'hello', value: 'msg from your parent' }
  dialog.postMessage(msg)
  // 打开一个子窗口
  // 通过这种方式打开的子窗口不会创建新的进程，效率非常高，可以在几百毫秒内就为用户呈现窗口内容
  window.open(`/WindowSetting/AccountSetting`, '_blank', JSON.stringify(config))
  // 这里不能单纯地使用window对象的onload事件或者 document 对象的DOMContentLoaded事件来判断子窗口是否加载成功了。因为这个时候你的业务代码（比如从数据库异步读取数据的逻辑）可能尚未执行完成。
}

</script>
<template>
  <div class="BarLeft">
    <div class="userIcon">
      <img src="../assets/avatar.jpg" alt="" />
    </div>
    <div class="menu">
      <router-link
        v-for="item in mainWindowRoutes"
        :to="item.path"
        :class="[`menuItem`, { selected: item.isSelected }]"
      >
        <i :class="[`icon`, item.isSelected ? item.iconSelected : item.icon]"></i>
      </router-link>
    </div>
    <div @click="openSettingWindow" class="setting">
      <div class="menuItem">
        <i class="icon icon-setting"></i>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.BarLeft {
  width: 54px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(46, 46, 46);
  -webkit-app-region: drag;
}
.userIcon {
  height: 84px;
  padding-top: 36px;
  box-sizing: border-box;
  img {
    width: 34px;
    height: 34px;
    margin-left: 10px;
  }
}
.menu {
  flex: 1;
}
.menuItem {
  height: 44px;
  line-height: 44px;
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
  display: block;
  text-decoration: none;
  color: rgb(126, 126, 126);
  cursor: pointer;
  -webkit-app-region: no-drag;
  i {
    font-size: 22px;
  }
  &:hover {
    color: rgb(141, 141, 141);
  }
}
.selected {
  color: rgb(7, 193, 96);
  &:hover {
    color: rgb(7, 193, 96);
  }
}
.setting {
  margin-bottom: 5px;
}
</style>
