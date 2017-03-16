import Vue from 'vue';

import './assets/less/main.less';

import App from './App';
import injection from './helpers/injection';
import router from './router';
import store from './stores';

Vue.config.productionTip = false;
Vue.use(injection);

injection.vue = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
