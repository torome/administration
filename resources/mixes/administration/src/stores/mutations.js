/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */

import Vue from 'vue'

export const message = (state, message) => {
  if ((typeof message.text) === 'string') {
    message.text = [message.text]
  }
  state.message = message
}

export const progress = (state, progress) => {
  state.progress = progress
}

export const setting = (state, setting) => {
  state.setting = setting
}

export const single = (state, payload) => {
  Vue.set(state.setting, payload.key, payload.value)
}

export const title = (state, title) => {
  state.title = title
  global.document.title = title
}

export const token = (state, token) => {
  window.localStorage.setItem('token', JSON.stringify(token))
  state.token = token
}
