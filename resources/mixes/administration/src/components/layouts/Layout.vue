<script>
  import LayoutHeader from './LayoutHeader'

  export default {
    components: {
      LayoutHeader
    },
    data: () => {
      return {
        menu: [
          {
            'text': '全局',
            'icon': 'icon icon-home',
            'uri': '/'
          }
        ]
      }
    },
    mounted () {
      let _this = this
      if (window.hasOwnProperty('modules')) {
        window.modules.forEach(function (key) {
          if (window.hasOwnProperty(key)) {
            let module = window[key].default
            if (typeof module === 'object' && typeof module.header === 'function') {
              module.header(_this.menu)
            }
          }
        })
      }
      if (window.hasOwnProperty('extensions')) {
        window.extensions.forEach(function (key) {
          if (window.hasOwnProperty(key)) {
            let extension = window[key].default
            if (typeof extension === 'object' && typeof extension.header === 'function') {
              extension.header(_this.menu)
            }
          }
        })
      }
    }
  }
</script>
<template>
    <div class="wrapper">
        <layout-header :menu="menu"></layout-header>
        <router-view></router-view>
    </div>
</template>