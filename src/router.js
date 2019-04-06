import Vue from 'vue';
import Router from 'vue-router';

import welcome from './views/welcome.vue';
import login from './views/login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
});
