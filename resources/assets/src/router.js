import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import Setting from './components/pages/Setting'

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
          component: Dashboard
        },
        {
          path: '/setting',
          component: Setting
        }
      ]
    }
  ]
})
