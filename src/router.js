import Vue from 'vue';
import Router from 'vue-router';

import welcome from './views/welcome.vue';
import login from './views/login.vue';
import user from './views/user/user.vue';
import userhome from './views/user/user-home.vue';
import userapply from './views/user/user-apply.vue';
import userprofile from './views/user/user-profile.vue';
import userProcess from './views/user/user-process.vue';
import admin from './views/admin/admin.vue';
import adminHome from './views/admin/admin-home.vue';
import adminAudit from './views/admin/admin-audit.vue';
import adminProfile from './views/admin/admin-profile.vue';

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
    {
      path: '/user',
      name: 'user',
      component: user,
      redirect:{
        name:'userhome'
      },
      children:[{
          path: 'home',
          name: 'userhome',
          component: userhome,
        },{
          path: 'apply',
          name: 'userapply',
          component: userapply,
        },{
          path: 'profile',
          name: 'userprofile',
          component: userprofile,
        },{
          path: 'process',
          name: 'userProcess',
          component: userProcess,
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      redirect:{
        name: 'adminHome'
      },
      children:[{
          path: 'home',
          name: 'adminHome',
          component: adminHome,
        },
        {
          path: 'audit',
          name: 'adminAudit',
          component: adminAudit,
        },
        {
          path: 'profile',
          name: 'adminProfile',
          component: adminProfile,
        },
      ]
    }
  ],
});
