import { createApp } from 'vue'
import App from './App.vue'
// 导入路由文件
import router from './router';
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 注册路由/elementplus
createApp(App).use(router).use(ElementPlus).mount('#app')
