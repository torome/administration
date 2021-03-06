/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex)
const state = {
  message: {
    show: false,
    type: 'notice',
    text: 'This is a message'
  },
  progress: 'done',
  setting: [],
  title: 'Notadd Administration',
  token: {},
  user: {
    avatar: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg',
    name: 'Admin'
  }
}
const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
if (module.hot) {
  module.hot.accept([
    './getters',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      mutations: require('./mutations')
    })
  })
}
export default store
