<script>
  import LayoutContent from './LayoutContent'
  import LayoutFooter from './LayoutFooter'
  import LayoutHeader from './LayoutHeader'
  import LayoutSidebar from './LayoutSidebar'
  import NavbarMenu from '../libraries/NavbarMenu.vue'
  import SidebarMenu from '../libraries/SidebarMenu.vue'

  export default {
    components: {
      LayoutContent,
      LayoutFooter,
      LayoutHeader,
      LayoutSidebar,
      NavbarMenu,
      SidebarMenu
    },
    data: () => {
      return {
        menu: [
          {
            'text': '基础配置',
            'icon': 'fa fa-cogs',
            'uri': '/'
          },
          {
            'text': '内容管理',
            'icon': 'fa fa-cogs',
            'uri': '/content'
          },
          {
            'text': '公众平台',
            'icon': 'fa fa-cogs',
            'uri': '/wechat'
          }
        ],
        nav: [
          {
            text: '全局设置',
            icon: 'fa fa-globe',
            uri: '/setting'
          },
          {
            text: '附件设置',
            icon: 'fa fa-cloud-upload',
            uri: '/upload',
            menu: [
              {
                text: '上传设置',
                icon: 'fa fa-file-o',
                uri: '/upload'
              },
              {
                text: '存储设置',
                icon: 'fa fa-cloud',
                uri: '/storage'
              },
              {
                text: '水印设置',
                icon: 'fa fa-circle-o',
                uri: '/watermark'
              },
              {
                text: 'CDN 设置',
                icon: 'fa fa-circle-o',
                uri: '/cdn'
              }
            ]
          },
          {
            text: 'SEO 设置',
            icon: 'fa fa-search',
            uri: '/seo'
          },
          {
            text: '邮件设置',
            icon: 'fa fa-envelope-o',
            uri: '/email',
            menu: [
              {
                text: '邮件设置',
                icon: 'fa fa-envelope-o',
                uri: '/email'
              }
            ]
          },
          {
            text: '调试工具',
            icon: 'fa fa-exclamation',
            uri: '/debug'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
<template>
    <div class="wrapper">
        <layout-header>
            <navbar-menu slot="menu" :menu="menu"></navbar-menu>
        </layout-header>
        <layout-sidebar>
            <sidebar-menu :menu="nav"></sidebar-menu>
        </layout-sidebar>
        <layout-content>
            <router-view></router-view>
        </layout-content>
        <layout-footer></layout-footer>
    </div>
</template>