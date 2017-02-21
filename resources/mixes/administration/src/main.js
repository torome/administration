/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */

import 'font-awesome/less/font-awesome.less'
import 'bootstrap/less/bootstrap.less'
import 'slimscroll/example/ssmaster/jquery.slimscroll'
import './assets/less/main.less'
import './assets/less/skins/all-skins.less'
import '../static/js/app'

import Notadd from './libraries/notadd'

import Vue from 'vue'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

import App from './components/App'
import router from './router'
import store from './stores'

Vue.use(VeeValidate)
Vue.use(VueResource)
Vue.use(Notadd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
/* eslint-enable no-new */
