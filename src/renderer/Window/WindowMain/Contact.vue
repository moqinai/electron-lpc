<!--
 * @Description: 功能：测试element-plus
 * @Date: 2023-10-23 23:30:40
 * @LastEditTime: 2023-10-27 01:22:31
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
// import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'

const count = ref(0)

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<template>
  <div class="ContactBoard">
    <BarTop />
    <div class="contentTest">
      <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
      </div>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <br />
      <br />
      <br />
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="scss">
.ContactBoard {
  flex: 1;
}
.contentTest {
  padding: 18px;
}
</style>
