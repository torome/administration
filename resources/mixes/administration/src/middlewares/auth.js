/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */

import Auth from '../helpers/auth'

export default (to, from, next) => {
  if (Auth.logined()) {
    next()
  } else {
    next({
      path: '/login'
    })
  }
}
