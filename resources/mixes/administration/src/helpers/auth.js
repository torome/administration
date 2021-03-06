/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */
import Vue from 'vue'
import store from '../stores'
export default {
  logined () {
    let token = JSON.parse(window.localStorage.getItem('token'))
    if (token) {
      if (token.access_token && token.refresh_token) {
        if (token.expires_in <= Date.parse(new Date()) / 1000) {
          return false
        } else {
          Vue.http.defaults.headers.common['Accept'] = 'application/json'
          Vue.http.defaults.headers.common['Authorization'] = 'Bearer ' + token.access_token
          JSON.stringify(store.state.token) === '{}' && store.commit('token', token)
          let setting = store.state.setting
          if (JSON.stringify(setting) === '[]') {
            Vue.http.post(window.api + '/setting/all').then(response => {
              if (typeof response.data.data === 'undefined') {
                store.commit('setting', [])
              } else {
                store.commit('setting', response.data.data)
              }
            })
          }
          return true
        }
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
