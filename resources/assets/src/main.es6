// bootstrap
import 'bootstrap/less/bootstrap.less'
import 'bootstrap'

// font-awesome
import 'font-awesome/less/font-awesome.less'

// ionicons
import 'ionicons/dist/scss/ionicons.scss'

// meat-dashboard
import 'meat-dashboard/less/AdminLTE.less'
import 'meat-dashboard/less/skins/skin-blue.less'
import 'meat-dashboard'

// vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import {Shared} from './shared'

// 导出根视图组件
import {UiAuth} from './components'

import BasicModule from './basic-module/bootstrap'

// 启动并初始化应用
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)

Vue.http.options.root = '/static/mock-data'

BasicModule(Shared)

let router = new VueRouter({
  hashbang: false,
  history: true
})

/* eslint-disable */
Shared.accessToken = Cookies.get('access_token')
/* eslint-enable */

router.map(Shared.routerMap).start(UiAuth, 'app')
