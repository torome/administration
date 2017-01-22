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
            'text': '基础配置',
            'icon': 'icon icon-home',
            'uri': '/'
          },
          {
            'text': '内容管理',
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