<script>
    import TreeViewMenu from "./TreeViewMenu.vue";
    export default {
        components: {
            TreeViewMenu
        },
        props: {
            menu: {
                type: Array
            }
        }
    };
</script>
<template>
    <ul class="sidebar-menu">
        <li v-for="item in menu" class="treeview" :class="{ 'active': $route.path === item.uri }">
            <a v-link="item.uri">
                <i class="{{ item.icon }}"></i> <span>{{item.text}}</span>
                <span v-show="item.menu" class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <tree-view-menu :menu="item.menu" v-if="item.hasOwnProperty('menu')"></tree-view-menu>
        </li>
    </ul>
</template>