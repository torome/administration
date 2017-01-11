<script>
  import LayoutContent from '../../layouts/LayoutContent'
  import LayoutFooter from '../../layouts/LayoutFooter'
  import LayoutHeader from '../../layouts/LayoutHeader'
  import LayoutSidebar from '../../layouts/LayoutSidebar'
  import NavbarMenu from '../../libraries/NavbarMenu'
  import SidebarMenu from '../../libraries/SidebarMenu'

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
            'icon': 'icon icon-home',
            'uri': '/'
          },
          {
            'text': '内容管理',
            'icon': 'icon icon-article',
            'uri': '/content'
          },
          {
            'text': '公众平台',
            'icon': 'icon icon-wechat',
            'uri': '/wechat'
          }
        ],
        nav: [
          {
            text: '文章管理',
            icon: 'fa fa-circle-o',
            uri: '#',
            menu: [
              {
                text: '全部文章',
                icon: 'fa fa-circle-o',
                uri: '/content/article'
              },
              {
                text: '分类',
                icon: 'fa fa-circle-o',
                uri: '/content/category'
              },
              {
                text: '标签',
                icon: 'fa fa-circle-o',
                uri: '/content/tag'
              },
              {
                text: '回收站',
                icon: 'fa fa-circle-o',
                uri: '/content/recycle'
              }
            ]
          },
          {
            text: '页面管理',
            icon: 'fa fa-circle-o',
            uri: '#',
            menu: [
              {
                text: '全部页面',
                icon: 'fa fa-circle-o',
                uri: '/content/page'
              },
              {
                text: '页面分类',
                icon: 'fa fa-circle-o',
                uri: '/content/page/category'
              }
            ]
          },
          {
            text: '系统组件',
            icon: 'fa fa-circle-o',
            uri: '#',
            menu: [
              {
                text: '组件管理',
                icon: 'fa fa-circle-o',
                uri: '/content/component'
              }
            ]
          },
          {
            text: '模板管理',
            icon: 'fa fa-circle-o',
            uri: '/content/template'
          },
          {
            text: '插件管理',
            icon: 'fa fa-circle-o',
            uri: '/content/extension'
          },
          {
            text: '评论功能',
            icon: 'fa fa-circle-o',
            uri: '/content/comment'
          }
        ]
      }
    }
  }
</script>
<template>
    <div class="wrapper">
        <layout-header :menu="menu"></layout-header>
        <layout-sidebar>
            <sidebar-menu :menu="nav"></sidebar-menu>
        </layout-sidebar>
        <layout-content>
            <router-view></router-view>
        </layout-content>
        <layout-footer></layout-footer>
    </div>
</template>