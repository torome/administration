export const message = (state, message) => {
  state.message = message
  state.history.push('message')
}
