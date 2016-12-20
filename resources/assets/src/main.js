// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'font-awesome/less/font-awesome.less'
import 'bootstrap/less/bootstrap.less'
import 'slimscroll/example/ssmaster/jquery.slimscroll'
import './assets/less/main.less'
import './assets/less/skins/all-skins.less'
import '../static/js/app'
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './components/App'
import router from './router'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
