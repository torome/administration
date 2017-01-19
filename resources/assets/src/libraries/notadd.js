/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-19 17:23
 */

import $ from 'jquery'
import sortable from 'html5sortable'

export default {
  install: function (Vue) {
    if (this.installed) {
      return
    }

    $.fn.sortable = function (options) {
      return sortable(this, options)
    }

    Vue.jquery = $

    Object.defineProperties(Vue.prototype, {
      $jquery: {
        get () {
          return Vue.jquery
        }
      }
    })
  }
}
