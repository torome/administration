import Vue from 'vue';
import Router from 'vue-router';

import Debug from '../pages/Debug';
import Layout from '../layouts/Layout';
import Login from '../pages/Login';
import Seo from '../pages/Seo';
import Setting from '../pages/Setting';
import Sitemap from '../pages/Sitemap';
import Upload from '../pages/Upload';

Vue.use(Router);

const configuration = [
    {
        component: Debug,
        path: 'debug',
    },
    {
        component: Seo,
        path: 'seo',
    },
    {
        component: Setting,
        path: 'setting',
    },
    {
        component: Sitemap,
        path: 'sitemap',
    },
    {
        component: Upload,
        path: 'upload',
    },
];

const modules = [];

const routes = [
    {
        children: [
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
