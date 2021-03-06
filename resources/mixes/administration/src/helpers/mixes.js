import $ from 'jquery'
import axios from 'axios'
import addFinally from 'promise.prototype.finally'
import Vue from 'vue'
import sortable from 'html5sortable'
import Editor from '../components/libraries/Editor'
import InputTag from '../components/libraries/InputTag'
import Modal from '../components/libraries/Modal'
import NavbarMenu from '../components/libraries/NavbarMenu'
import Paginator from '../components/libraries/Paginator'
import SidebarMenu from '../components/libraries/SidebarMenu'
import LayoutContent from '../components/layouts/LayoutContent'
import LayoutFooter from '../components/layouts/LayoutFooter'
import LayoutHeader from '../components/layouts/LayoutHeader'
import LayoutSidebar from '../components/layouts/LayoutSidebar'
import store from '../stores'

addFinally.shim()

export function componentMixin (Notadd) {
  Notadd.components = {
    editor: Editor,
    modal: Modal,
    navbar: NavbarMenu,
    paginator: Paginator,
    sidebar: SidebarMenu,
    tag: InputTag
  }
}

export function initMixin (Notadd) {
  Notadd.init = function () {
    Notadd.store = store
    if (window.hasOwnProperty('modules')) {
      window.modules.forEach(function (key) {
        if (window.hasOwnProperty(key)) {
          let module = window[key].default
          if (typeof module === 'object') {
            if (typeof module.install === 'function') {
              module.install(Vue, Notadd)
            }
          }
        }
      })
    }
  }
}

export function installMixin (Notadd) {
  Notadd.install = function (Vue) {
    let _this = this
    if (_this.installed) {
      return
    }
    _this.fixMenu('.sidebar')
    $(window, '.wrapper').resize(function () {
      _this.fixStyle()
    })
    $.fn.sortable = function (options) {
      return sortable(this, options)
    }
    Notadd.http = axios
    Notadd.http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    Notadd.http.interceptors.request.use(configuration => {
      return configuration
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })
    Notadd.http.interceptors.response.use(response => {
      return response
    }, function (error) {
      console.log(error)
      console.log(error.response)
      console.log(error.response.data)
      if (error.response.status === 401) {
        Notadd.Vue.$router.push('/login')
      }
      if (error.response.status > 401 && error.response.status < 500) {
        store.commit('message', {
          show: true,
          type: 'error',
          text: error.response.data
        })
      } else {
        throw new Error(error)
      }
    })
    Vue.http = Notadd.http
    Vue.jquery = $
    Object.defineProperties(Vue.prototype, {
      $http: {
        get () {
          return Notadd.http
        }
      },
      $jquery: {
        get () {
          return Vue.jquery
        }
      }
    })
  }
}

export function layoutMixin (Notadd) {
  Notadd.layouts = {
    content: LayoutContent,
    footer: LayoutFooter,
    header: LayoutHeader,
    sidebar: LayoutSidebar
  }
}
