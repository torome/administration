import Vue from 'vue';
import Router from 'vue-router';

import Debug from '../pages/Debug';
import Dashboard from '../pages/Dashboard';
import Extension from '../pages/Extension';
import Layout from '../layouts/Layout';
import Login from '../pages/Login';
import Mail from '../pages/Mail';
import Module from '../pages/Module';
import Navigation from '../pages/Navigation';
import Seo from '../pages/Seo';
import Setting from '../pages/Setting';
import Sitemap from '../pages/Sitemap';
import Upload from '../pages/Upload';

import requireAuth from '../middlewares/auth';

Vue.use(Router);

const configuration = [
    {
        beforeEnter: requireAuth,
        component: Debug,
        path: 'debug',
    },
    {
        beforeEnter: requireAuth,
        component: Extension,
        path: 'extension',
    },
    {
        beforeEnter: requireAuth,
        component: Mail,
        path: 'mail',
    },
    {
        beforeEnter: requireAuth,
        component: Module,
        path: 'module',
    },
    {
        beforeEnter: requireAuth,
        component: Navigation,
        path: 'navigation',
    },
    {
        beforeEnter: requireAuth,
        component: Seo,
        path: 'seo',
    },
    {
        beforeEnter: requireAuth,
        component: Setting,
        path: 'setting',
    },
    {
        beforeEnter: requireAuth,
        component: Sitemap,
        path: 'sitemap',
    },
    {
        beforeEnter: requireAuth,
        component: Upload,
        path: 'upload',
    },
];

const modules = [];

const routes = [
    {
        children: [
            {
                beforeEnter: requireAuth,
                component: Dashboard,
                path: '/',
            },
            ...configuration,
            ...modules,
        ],
        component: Layout,
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
