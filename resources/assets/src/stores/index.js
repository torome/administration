import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  error: '',
  success: '',
  history: []
}

export default new Vuex.Store({
  state
})
