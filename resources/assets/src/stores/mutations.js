import Vue from 'vue'

export const message = (state, message) => {
  state.message = message
}

export const setting = (state, setting) => {
  state.setting = setting
}

export const single = (state, payload) => {
  Vue.set(state.setting, payload.key, payload.value)
}

export const token = (state, token) => {
  window.localStorage.setItem('token', JSON.stringify(token))
  state.token = token
}
