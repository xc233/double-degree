import Vue from 'vue';
import Router from 'vue-router';

import welcome from './views/welcome.vue';
import login from './views/login.vue';
import user from './views/user/user.vue';
import userhome from './views/user/user-home.vue';
import userapply from './views/user/user-apply.vue';
import userprofile from './views/user/user-profile.vue';

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
      },
    ]
    }
  ],
});
