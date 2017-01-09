import Vue from 'vue'
import store from './stores'

export default {
  logined () {
    let token = JSON.parse(window.localStorage.getItem('token'))
    if (token) {
      console.log(token.expires_in)
      if (token.access_token && token.refresh_token) {
        store.commit('token', token)
        Vue.http.headers.common['Accept'] = 'application/json'
        Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('access_token')
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
