import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  message: {
    show: true,
    type: 'success',
    text: 'This is a message'
  },
  setting: {}
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
