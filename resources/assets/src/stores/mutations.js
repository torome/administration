const error = (state, error) => {
  state.error = error
  state.history.push('error')
}

const success = (state, success) => {
  state.success = success
  state.history.push('success')
}
