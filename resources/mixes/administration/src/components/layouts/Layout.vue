<script>
  import LayoutHeader from './LayoutHeader'
  import TopProgress from '../libraries/Progress'
  import {mapState} from 'vuex'
  export default {
    components: {
      LayoutHeader,
      TopProgress
    },
    computed: mapState([
      'progress'
    ]),
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
      _this.$store.commit('progress', 'start')
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
    },
    watch: {
      progress: {
        deep: true,
        handler: function (val) {
          let _this = this
          console.log('val')
          switch (val) {
            case 'start':
              _this.$refs.progress.start()
              break
            case 'pause':
              _this.$refs.progress.pause()
              break
            case 'fail':
              _this.$refs.progress.fail()
              break
            default:
              _this.$refs.progress.done()
          }
        }
      }
    }
  }
</script>
<template>
    <div class="wrapper">
        <layout-header :menu="menu"></layout-header>
        <top-progress color="#3498db" top="90px" ref="progress"></top-progress>
        <router-view></router-view>
    </div>
</template>