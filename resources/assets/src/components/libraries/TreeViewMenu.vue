<script>
  export default {
    name: 'tree-view-menu',
    props: {
      menu: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
<template>
    <ul class="treeview-menu">
        <li v-for="item in menu">
            <router-link :to="item.uri">
                <i :class="item.icon"></i> {{ item.text }}
                    <span v-show="item.menu" class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </router-link>
            <tree-view-menu :menu="item.menu"></tree-view-menu>
        </li>
    </ul>
</template>