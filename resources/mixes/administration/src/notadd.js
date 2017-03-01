import $ from 'jquery'
import {componentMixin, initMixin, installMixin, layoutMixin} from './helpers/mixes'
let _fixMenu = function (menu) {
  let animationSpeed = 500
  $(document).off('click', menu + ' li a')
  .on('click', menu + ' li a', function (e) {
    let $this = $(this)
    let checkElement = $this.next()
    if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {
      checkElement.slideUp(animationSpeed, function () {
        checkElement.removeClass('menu-open')
      })
      checkElement.parent('li').removeClass('active')
    } else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
      let parent = $this.parents('ul').first()
      let ul = parent.find('ul:visible').slideUp(animationSpeed)
      ul.removeClass('menu-open')
      let parentLi = $this.parent('li')
      checkElement.slideDown(animationSpeed, function () {
        checkElement.addClass('menu-open')
        parent.find('li.active').removeClass('active')
        parentLi.addClass('active')
        _fixStyle()
      })
    }
    if (checkElement.is('.treeview-menu')) {
      e.preventDefault()
    }
  })
}
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
  if (typeof $.fn.slimScroll !== 'undefined') {
    $('.sidebar').slimScroll({destroy: true}).height('auto')
    $('.sidebar').slimscroll({
      height: ($(window).height() - $('.main-header').height()) + 'px',
      color: 'rgba(0,0,0,0.2)',
      size: '3px'
    })
  }
  $('.main-sidebar').hover(function () {
    if ($('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-collapse') && $(window).width() > 767) {
      $('body').removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover')
    }
  }, function () {
    if ($('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-expanded-on-hover') && $(window).width() > 767) {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse')
      }
    }
  })
}

let _notadd = {
  fixMenu: _fixMenu,
  fixStyle: _fixStyle
}

componentMixin(_notadd)
initMixin(_notadd)
installMixin(_notadd)
layoutMixin(_notadd)

export const fixMenu = _fixMenu
export const fixStyle = _fixStyle
export default _notadd
