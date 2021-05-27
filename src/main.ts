import { createApp } from 'vue'

import router from '@/router'
import store from '@/store'

import App from '@/App.vue'
import { useElement } from '@/plugins/element'

import '@/styles/index.scss'
import 'element-plus/packages/theme-chalk/src/base.scss'

console.log('==环境变量==>', import.meta.env)

const app = createApp(App)

app.use(router).use(store)
useElement(app)

app.mount('#app')
