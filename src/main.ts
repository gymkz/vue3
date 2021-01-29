/**
 * Create By Meng
 * Desc: 项目入口
 */

import { createApp } from 'vue';

import './App.css';
import App from './App.vue';
import { routers } from './pages/router';
import Navigate from "./utils/navigate";

const app = createApp(App);

app.use(routers); // 配置路由
Navigate.init(routers); // 初始化路由导航
app.mount('#app'); // 挂载到html
