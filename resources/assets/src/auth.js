export default {
  logined () {
    let token = JSON.parse(window.localStorage.getItem('token'))
    if (token) {
      window.alert(token.expires_in)
      return !!(token.access_token && token.refresh_token)
    } else {
      return false
    }
  }
}
