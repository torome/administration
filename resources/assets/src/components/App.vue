<script>
    import {Shared} from "src/shared";
    import Sidebar from "./Sidebar.vue";
    import NavbarMenu from "./NavbarMenu.vue";
    import Layout from "./Layout.vue";
    import LayoutHeader from "./LayoutHeader.vue";
    import Logo from "./Logo.vue";
    export default {
        components: {Layout, LayoutHeader, Sidebar, Logo, NavbarMenu},
        data: () => {
            return {
                "menu": [
                    {
                        "text": "基础",
                        "icon": "fa fa-circle-o",
                        "uri": "/"
                    },
                    {
                        "text": "文章",
                        "icon": "fa fa-circle-o",
                        "uri": "/article"
                    }
                ]
            };
        },
        route: {
            activate: function (transition) {
                if (!Shared.accessToken) {
                    this.$router.go("/login");
                    transition.next();
                } else {
                    transition.next();
                }
            }
        }
    };
</script>
<template>
    <layout>
        <layout-header>
            <navbar-menu slot="menu" :menu="menu"></navbar-menu>
        </layout-header>
        <router-view></router-view>
        <footer class="main-footer">
            <div class="pull-right hidden-xs">Anything you want</div>
            <strong>Copyright &copy; 2016 <a v-link="{ 'path': '/' }">Notadd</a>.</strong> All rights reserved.
        </footer>
    </layout>
</template>