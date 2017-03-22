import Vue from 'vue';
import Router from 'vue-router';

import Debug from '../pages/Debug';
import Dashboard from '../pages/Dashboard';
import Expand from '../pages/Expand';
import Extension from '../pages/Extension';
import Layout from '../layouts/Layout';
import Login from '../pages/Login';
import Mail from '../pages/Mail';
import Module from '../pages/Module';
import Navigation from '../pages/Navigation';
import Seo from '../pages/Seo';
import Setting from '../pages/Setting';
import Sitemap from '../pages/Sitemap';
import Template from '../pages/Template';
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
        component: Expand,
        path: 'expand',
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
        component: Template,
        path: 'template',
    },
    {
        beforeEnter: requireAuth,
        component: Upload,
        path: 'upload',
    },
];

export default {
    init(injection) {
        const routes = [
            {
                children: [
                    {
                        beforeEnter: requireAuth,
                        component: Dashboard,
                        path: '/',
                    },
                    ...configuration,
                    ...injection.routes.extension,
                    ...injection.routes.module,
                    ...injection.routes.other,
                ],
                component: Layout,
                path: '/',
            },
            {
                component: Login,
                path: '/login',
            },
        ];
        return new Router({
            routes,
        });
    },
};
