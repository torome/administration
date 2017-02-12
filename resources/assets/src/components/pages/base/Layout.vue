<script>
  import LayoutContent from '../../layouts/LayoutContent'
  import LayoutFooter from '../../layouts/LayoutFooter'
  import LayoutSidebar from '../../layouts/LayoutSidebar'
  import NavbarMenu from '../../libraries/NavbarMenu'
  import SidebarMenu from '../../libraries/SidebarMenu'

  export default {
    components: {
      LayoutContent,
      LayoutFooter,
      LayoutSidebar,
      NavbarMenu,
      SidebarMenu
    },
    data: () => {
      return {
        nav: [
          {
            text: '全局设置',
            icon: 'fa fa-globe',
            uri: '/setting'
          },
          {
            text: '附件设置',
            icon: 'fa fa-cloud-upload',
            uri: '#',
            menu: [
              {
                text: '上传设置',
                icon: 'fa fa-file-o',
                uri: '/upload'
              }/* ,
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
              } */
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
<template>
    <div>
        <layout-sidebar>
            <sidebar-menu :menu="nav"></sidebar-menu>
        </layout-sidebar>
        <layout-content>
            <router-view></router-view>
        </layout-content>
        <layout-footer></layout-footer>
    </div>
</template>