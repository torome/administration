/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import BaseDashboard from './components/Dashboard'
import BaseLayout from './components/pages/Layout'
import Debug from './components/pages/Debug'
import Extension from './components/pages/Extension'
import Layout from './components/layouts/Layout'
import Login from './components/pages/Login'
import Mail from './components/pages/Mail'
import Module from './components/pages/Module'
import Navigation from './components/pages/Navigation'
import Seo from './components/pages/Seo'
import Sitemap from './components/pages/Sitemap'
import Upload from './components/pages/Upload'
import Setting from './components/pages/Setting'

import requireAuth from './middlewares/auth'

Vue.use(VueRouter)

let _bases = [
  {
    path: '/',
    component: BaseDashboard,
    beforeEnter: requireAuth
  },
  {
    path: 'debug',
    component: Debug,
    beforeEnter: requireAuth
  },
  {
    path: 'email',
    component: Mail,
    beforeEnter: requireAuth
  },
  {
    path: 'extension',
    component: Extension,
    beforeEnter: requireAuth
  },
  {
    path: 'module',
    component: Module,
    beforeEnter: requireAuth
  },
  {
    path: 'navigation',
    component: Navigation,
    beforeEnter: requireAuth
  },
  {
    path: 'seo',
    component: Seo,
    beforeEnter: requireAuth
  },
  {
    path: 'setting',
    component: Setting,
    beforeEnter: requireAuth
  },
  {
    path: 'sitemap',
    component: Sitemap,
    beforeEnter: requireAuth
  },
  {
    path: 'storage',
    component: Upload,
    beforeEnter: requireAuth
  },
  {
    path: 'upload',
    component: Upload,
    beforeEnter: requireAuth
  }
]

let _modules = [
  {
    path: '/',
    component: BaseLayout,
    children: _bases
  }
]

if (window.hasOwnProperty('modules')) {
  window.modules.forEach(function (key) {
    if (window.hasOwnProperty(key)) {
      let module = window[key].default
      if (typeof module === 'object') {
        if (typeof module.router === 'function') {
          module.router({
            auth: requireAuth,
            bases: _bases,
            modules: _modules
          })
        }
      }
    }
  })
}

if (window.hasOwnProperty('extensions')) {
  window.extensions.forEach(function (key) {
    if (window.hasOwnProperty(key)) {
      let extension = window[key].default
      if (typeof extension === 'object' && typeof extension.router === 'function') {
        extension.router({
          auth: requireAuth,
          bases: _bases,
          modules: _modules
        })
      }
    }
  })
}

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Layout,
      children: _modules
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
