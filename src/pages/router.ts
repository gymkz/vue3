/**
 * Create By Meng
 * Desc: 
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import Account from './account/Account.vue';
import Login from './account/Login.vue';
import Register from './account/Register.vue';
import Home from './home/Home.vue';
import Notfound from './other/Notfound.vue';
import Unknown from './other/Unknown.vue';

export const routers = createRouter({
  
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home', component: Home },
    { path: '/home', name: 'home', component: Home },
    { path: '/account', name: 'account', component: Account },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/unknown', name: 'unknown', component: Unknown },
    { path: '/*', component: Notfound },
  ]
});
