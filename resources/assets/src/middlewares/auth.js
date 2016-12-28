import Auth from '../auth'

export default (to, from, next) => {
  if (Auth.logined()) {
    next()
  } else {
    next({
      path: '/login'
    })
  }
}
