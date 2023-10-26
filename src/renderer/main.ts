/*
 * @Author: lipengcheng
 * @Date: 2023-10-17 11:06:31
 * @LastEditTime: 2023-10-26 23:52:22
 * @Description:
 */
import { createApp } from 'vue'
import './assets/style.css'
import './assets/icon/iconfont.css'
import App from './App.vue'
import { router } from './router'

import { createPinia } from 'pinia'

// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { ElCollapseTransition } from 'element-plus'


// import { db } from "../common/db";
// db("Chat")
//   .first()
//   .then((obj) => {
//     console.log(obj);
//   });

const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
app.component(ElCollapseTransition.name, ElCollapseTransition)

app.use(createPinia()).use(router).mount('#app')
