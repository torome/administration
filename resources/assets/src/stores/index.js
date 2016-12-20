import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  error: '',
  success: '',
  history: [],
  message: {
    type: 'success',
    text: 'This is a message'
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
