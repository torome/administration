import Vue from 'vue';

import App from './App';
import injection from './injection';
import router from './router';

Vue.config.productionTip = false;
Vue.use(injection);

injection.vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
