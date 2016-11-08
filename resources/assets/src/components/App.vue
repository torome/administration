<script>
    import Layout from "./Layout.vue";
    import LayoutHeader from "./LayoutHeader.vue";
    import Logo from "./Logo.vue";
    import NavbarMenu from "./NavbarMenu.vue";
    import Sidebar from "./Sidebar.vue";
    import Storage from "../libraries/Storage";
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
                if (Storage.state.access_token === null) {
                    this.$http.post(Storage.state.url + "/admin", {
                        _token: Storage.state.csrf_token
                    }).then(response => {
                        if (response.body.status === "success") {
                            Storage.commit("access_token", response.body.access_token);
                            Storage.commit("expires_in", response.body.expires_in);
                            Storage.commit("refresh_token", response.body.refresh_token);
                        }
                    }, response => {
                        if (response.status === 401) {
                            this.$router.go("login");
                        }
                    });
                }
                if (Storage.state.settings === null) {
                    this.$http.post("http://notadd.io/api/setting/all", {
                        _token: Storage.state.csrf_token
                    }).then((response) => {
                        console.log(response);
                    });
                }
                transition.next();
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