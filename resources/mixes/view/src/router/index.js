import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../layouts/Layout';
import Login from '../pages/Login';

Vue.use(Router);

// const base = [
// ];

const routes = [
  {
    component: Layout,
    children: [
    ],
    path: '/',
  },
  {
    component: Login,
    path: '/login',
  },
];

export default new Router({
  routes,
});
