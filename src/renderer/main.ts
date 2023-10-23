/*
 * @Author: lipengcheng
 * @Date: 2023-10-17 11:06:31
 * @LastEditTime: 2023-10-23 23:41:49
 * @Description:
 */
import { createApp } from 'vue'
import './assets/style.css'
import './assets/icon/iconfont.css'
import App from './App.vue'
import { router } from './router'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { ElCollapseTransition } from 'element-plus'

const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
app.component(ElCollapseTransition.name, ElCollapseTransition)

app.use(router).mount('#app')
