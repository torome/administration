import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseDashboard from './components/Dashboard'
import ContentDashboard from './components/pages/content/Dashboard'
import ContentLayout from './components/pages/content/Layout'
import Debug from './components/pages/base/Debug'
import Layout from './components/layouts/Layout'
import Login from './components/pages/Login'
import Mail from './components/pages/base/Mail'
import Seo from './components/pages/base/Seo'
import Upload from './components/pages/base/Upload'
import Setting from './components/pages/base/Setting'

import requireAuth from './middlewares/auth'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: BaseDashboard,
          beforeEnter: requireAuth
        },
        {
          path: '/setting',
          component: Setting,
          beforeEnter: requireAuth
        },
        {
          path: '/upload',
          component: Upload,
          beforeEnter: requireAuth
        },
        {
          path: '/storage',
          component: Upload,
          beforeEnter: requireAuth
        },
        {
          path: '/seo',
          component: Seo,
          beforeEnter: requireAuth
        },
        {
          path: '/email',
          component: Mail,
          beforeEnter: requireAuth
        },
        {
          path: '/debug',
          component: Debug,
          beforeEnter: requireAuth
        }
      ]
    },
    {
      path: '/content',
      component: ContentLayout,
      children: [
        {
          path: '/',
          component: ContentDashboard,
          beforeEnter: requireAuth
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
