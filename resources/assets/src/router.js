import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard'
import Debug from './components/pages/Debug'
import Layout from './components/layouts/Layout'
import Mail from './components/pages/Mail'
import Seo from './components/pages/Seo'
import Upload from './components/pages/Upload'
import Setting from './components/pages/Setting'

import requireAuth from './middlewares/auth'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: Dashboard,
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
    }
  ]
})
