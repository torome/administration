<script>
  export default {
    name: 'tree-view-menu',
    props: {
      menu: {
        type: Array
      }
    }
  }
</script>
<style scoped>
    .treeview-menu.menu-open {
        overflow: hidden;
    }

    .treeview-menu > li {
        position: relative;
    }

    .treeview-menu > li:before {
        border-left: 1px dashed #696c6c;
        bottom: 13px;
        content: "";
        display: block;
        height: 100%;
        left: 86px;
        top: -25px;
        position: absolute;
        width: 1px;
        z-index: 1;
    }

    .treeview-menu > li > a {
        padding-left: 120px;
        position: relative;
    }

    .treeview-menu > li > a:before {
        border-bottom: 1px dashed #696c6c;
        content: "";
        display: block;
        left: 86px;
        position: absolute;
        top: 25px;
        width: 20px;
        z-index: 1;
    }

    .treeview-menu > li > a.active {
        color: #ffffff;
    }
</style>
<template>
    <ul class="treeview-menu">
        <li v-for="item in menu">
            <router-link :to="item.uri">
                {{ item.text }}
                <span v-show="item.menu" class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </router-link>
            <tree-view-menu :menu="item.menu" v-if="item.menu"></tree-view-menu>
        </li>
    </ul>
</template>