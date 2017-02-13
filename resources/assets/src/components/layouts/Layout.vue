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
          },
          {
            'text': '文章',
            'icon': 'icon icon-article',
            'uri': '/content'
          }
        ]
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