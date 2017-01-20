/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-19 17:23
 */

import $ from 'jquery'
import sortable from 'html5sortable'

let _fixStyle = function () {
  $('body, html, .wrapper').css('height', 'auto')
  $('.layout-boxed > .wrapper').css('overflow', 'hidden')

  let neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight()
  let windowHeight = $(window).height()
  let sidebarHeight = $('.sidebar').height()

  if ($('body').hasClass('fixed')) {
    $('.content-wrapper, .right-side').css('min-height', windowHeight - $('.main-footer').outerHeight())
  } else {
    let postSetWidth
    if (windowHeight >= sidebarHeight) {
      $('.content-wrapper, .right-side').css('min-height', windowHeight - neg)
      postSetWidth = windowHeight - neg
    } else {
      $('.content-wrapper, .right-side').css('min-height', sidebarHeight)
      postSetWidth = sidebarHeight
    }

    let controlSidebar = $('.control-sidebar')

    if (typeof controlSidebar !== 'undefined') {
      if (controlSidebar.height() > postSetWidth) {
        $('.content-wrapper, .right-side').css('min-height', controlSidebar.height())
      }
    }
  }

  if (!$('body').hasClass('fixed')) {
    if (typeof $.fn.slimScroll !== 'undefined') {
      $('.sidebar').slimScroll({destroy: true}).height('auto')
    }
    return
  } else if (typeof $.fn.slimScroll === 'undefined' && window.console) {
    window.console.error('Error: the fixed layout requires the slimscroll plugin!')
  }
  if ($.AdminLTE.options.sidebarSlimScroll) {
    if (typeof $.fn.slimScroll !== 'undefined') {
      $('.sidebar').slimScroll({destroy: true}).height('auto')

      $('.sidebar').slimscroll({
        height: ($(window).height() - $('.main-header').height()) + 'px',
        color: 'rgba(0,0,0,0.2)',
        size: '3px'
      })
    }
  }
}

export const fixStyle = _fixStyle

export default {
  install: function (Vue) {
    let _this = this

    if (_this.installed) {
      return
    }

    $(window, '.wrapper').resize(function () {
      _fixStyle()
    })

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
