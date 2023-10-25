<!--
 * @Description: 功能：
 * @Date: 2023-10-23 23:31:51
 * @LastEditTime: 2023-10-26 01:43:25
-->
<!-- 
  无论是用户点击ChatItem组件选中一个聊天会话，还是ChatBoard渲染完成后选中一个聊天会话，我们都应该通知其他组件，选中的聊天会话变更了
 -->
<script setup lang="ts">
import { ModelChat } from '../../../../model/ModelChat'
import BarTop from '../../../Component/BarTop.vue'
import { useChatStore } from '../../../store/useChatStore'
import { useMessageStore } from '../../../store/useMessageStore'
import MessageItem from './MessageItem.vue'

let chatStore = useChatStore()
let messageStore = useMessageStore()
let curId = ''
// 使用store对象的$subscribe方法订阅了数据变更事件，无论什么时候 store 内的数据发生了变化，都会执行我们为$subscribe方法提供的回调函数。

//订阅Store内数据的变化
chatStore.$subscribe((mutations, state) => {
  console.log(mutations)
  //  mutations 参数，这个参数的events属性携带着变更前的值和变更后的值，但这个属性只有在开发环境下存在，生产环境下不存在。
  let item = state.data.find(v => v.isSelected) as ModelChat
  if (item.id != curId) {
    messageStore.initData(item)
    curId = item.id
  }
})
</script>

<template>
  <div class="MessageBord">
    <BarTop />
    <div class="MessageList">
      <MessageItem :data="item" v-for="item in messageStore.data" :key="item.id" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.MessageBord {
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.MessageList {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgb(245, 245, 245);
}
</style>
