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
            'text': '基础',
            'icon': 'fa fa-cogs',
            'uri': '/'
          }
        ],
        nav: []
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