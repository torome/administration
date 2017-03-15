import Vue from 'vue';
import Router from 'vue-router';

import Debug from '../pages/Debug';
import Layout from '../layouts/Layout';
import Login from '../pages/Login';
import Setting from '../pages/Setting';

Vue.use(Router);

const configuration = [
  {
    component: Debug,
    path: 'debug',
  },
  {
    component: Setting,
    path: 'setting',
  },
];

const routes = [
  {
    component: Layout,
    children: [
      {
        children: configuration,
        path: '/',
      },
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
