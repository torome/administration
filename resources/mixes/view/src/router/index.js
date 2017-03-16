import Vue from 'vue';
import Router from 'vue-router';

import Debug from '../pages/Debug';
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

Vue.use(Router);

const configuration = [
    {
        component: Debug,
        path: 'debug',
    },
    {
        component: Extension,
        path: 'extension',
    },
    {
        component: Mail,
        path: 'mail',
    },
    {
        component: Module,
        path: 'module',
    },
    {
        component: Navigation,
        path: 'navigation',
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
