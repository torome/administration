/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */

import 'font-awesome/less/font-awesome.less'
import 'bootstrap/js/affix'
import 'bootstrap/js/dropdown'
import 'bootstrap/less/bootstrap.less'
import 'slimscroll/example/ssmaster/jquery.slimscroll'
import './assets/less/main.less'
import './assets/less/skins/all-skins.less'
import '../static/js/app'

import Notadd from './notadd'

import Vue from 'vue'
import VeeValidate from 'vee-validate'

import App from './components/App'
import router from './router'
import store from './stores'

Vue.use(VeeValidate)
Vue.use(Notadd)

Notadd.init()

/* eslint-disable no-new */
Notadd.Vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
/* eslint-enable no-new */
