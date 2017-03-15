import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../layouts/Layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Layout,
    },
  ],
});
