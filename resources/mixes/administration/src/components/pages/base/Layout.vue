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
            text: '全局 SEO 设置',
            icon: 'fa fa-search',
            uri: '/seo'
          },
          {
            text: '模块配置',
            icon: 'fa fa-plus-square',
            uri: '/module'
          },
          {
            text: '系统组件',
            icon: 'fa fa-object-group',
            uri: '#',
            menu: [
              {
                text: '导航管理',
                icon: 'fa fa-bars',
                uri: '/navigation'
              },
              {
                text: '邮件设置',
                icon: 'fa fa-envelope-o',
                uri: '/email'
              },
              {
                text: '调试工具',
                icon: 'fa fa-exclamation',
                uri: '/debug'
              }
            ]
          },
          {
            text: '插件管理',
            icon: 'fa fa-object-group',
            uri: '#',
            menu: [
              {
                text: '多说评论',
                icon: 'fa fa-comment',
                uri: '/duoshuo'
              },
              {
                text: '百度搜索',
                icon: 'fa fa-search',
                uri: '/search'
              },
              {
                text: '网站地图',
                icon: 'fa fa-map-signs',
                uri: '/sitemap'
              }
            ]
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