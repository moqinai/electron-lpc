<!--
 * @Description: 功能：
 * @Date: 2023-10-26 00:01:22
 * @LastEditTime: 2023-10-26 01:54:32
-->

<!-- 
当用户点击这个自定义组件的时候，程序执行了 Store 对象的selectItem方法，这个方法负责选中用户点击的组件，改变了用户点击组件的样式，同时还取消了原来选中的组件。

 -->
<script setup lang="ts">
// src\renderer\Window\WindowMain\Chat\ChatItem.vue
import { ModelChat } from '../../../../model/ModelChat'
import { useChatStore } from '../../../store/useChatStore'

defineProps<{ data: ModelChat }>()

let store = useChatStore()
let itemClick = (item: ModelChat) => {
  //选中当前会话
  store.selectItem(item)
}
</script>

<template>
  <div @click="itemClick(data)" :class="['chatItem', { chatItemSelected: data.isSelected }]">
    <div class="avatar">
      <img :src="data.avatar" alt="" />
    </div>
    <div class="chatInfo">
      <div class="row">
        <div class="fromName">{{ data.fromName }}</div>
        <div class="timeName">{{ data.sendTime }}</div>
      </div>
      <div class="row">
        <div class="lastMsg">{{ data.lastMsg }}</div>
        <div class="subscribe"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.chatItem {
  display: flex;
  height: 66px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: rgb(221, 219, 218);
  }
}
.chatItemSelected {
  background: rgb(196, 196, 196);
  &:hover {
    background: rgb(196, 196, 196);
  }
}
.avatar {
  width: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 46px;
    height: 46px;
  }
}
.chatInfo {
  flex: 1;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.row {
  box-sizing: border-box;
  height: 28px;
  line-height: 28px;
  display: flex;
}
.fromName {
  flex: 1;
}
.timeName {
  color: rgb(153, 153, 153);
  padding-right: 12px;
  font-size: 12px;
}
.lastMsg {
  color: rgb(153, 153, 153);
  flex: 1;
  font-size: 12px;
}
</style>