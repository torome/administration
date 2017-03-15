import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../layouts/Layout';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Layout,
  },
];

export default new Router({
  routes,
});
