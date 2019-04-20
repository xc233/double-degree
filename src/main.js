import Vue from 'vue';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
import '@/assets/css/reset.css';
import '@/assets/js/rem.js';

Vue.use(MintUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
