import 'font-awesome/less/font-awesome.less'
import 'bootstrap/less/bootstrap.less'
import 'slimscroll/example/ssmaster/jquery.slimscroll'
import './assets/less/main.less'
import './assets/less/skins/all-skins.less'
import '../static/js/app'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import App from './components/App'
import router from './router'
import store from './stores'

Vue.use(VeeValidate)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
/* eslint-enable no-new */
