// bootstrap
import 'bootstrap/less/bootstrap.less'
import 'bootstrap'

// font-awesome
import 'font-awesome/less/font-awesome.less'

// ionicons
import 'ionicons/dist/scss/ionicons.scss'

// admin-lte-config 全局配置保证在 admin-lte 之前
// import 'src/admin-lte.config'
// admin-lte
import 'admin-lte/dist/js/app'
import 'admin-lte/dist/css/AdminLTE.css'
// admin-lte-skins
import 'admin-lte/dist/css/skins/skin-blue.css'

// vue
import Vue from 'vue'
import VueRouter from 'vue-router'

// app
import {RouteConfig} from 'src/router'

// 导出根视图组件
import {_Master} from 'views/_Master'

// 启动并初始化应用
Vue.use(VueRouter)
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
RouteConfig(router)
router.start(_Master, 'root')
