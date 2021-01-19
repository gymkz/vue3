/**
 * Create By Meng
 * Desc: 项目入口
 */

import { createApp } from 'vue';

import './App.css';
import App from './App.vue';
import { routers } from './pages/router';

const app = createApp(App);

// routers.beforeEach((to, from, next) => {
//   console.log(to, from, next);
// });
app.use(routers); // 配置路由
app.mount('#app'); // 挂载到html
