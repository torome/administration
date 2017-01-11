export const message = (state, message) => {
  state.message = message
}

export const setting = (state, setting) => {
  state.setting = setting
}

export const single = (state, payload) => {
  state.setting[payload.key] = payload.value
  state.setting = Object.assign({}, state.setting)
}

export const token = (state, token) => {
  window.localStorage.setItem('token', JSON.stringify(token))
  state.token = token
}
