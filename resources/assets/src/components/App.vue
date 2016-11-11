<script>
    import Layout from "./Layout.vue";
    import LayoutHeader from "./LayoutHeader.vue";
    import Logo from "./Logo.vue";
    import NavbarMenu from "./NavbarMenu.vue";
    import Sidebar from "./Sidebar.vue";
    export default {
        components: {
            Layout,
            LayoutHeader,
            Sidebar,
            Logo,
            NavbarMenu
        },
        data: () => {
            return {
                "menu": [
                    {
                        "text": "基础",
                        "icon": "fa fa-cogs",
                        "uri": "/"
                    }
                ]
            };
        },
        route: {
            activate: function (transition) {
                if (window.localStorage.getItem("access_token") === null) {
                    this.$router.go("login");
                } else if (window.localStorage.getItem("settings") === null && transition.to.path !== "login") {
                    this.$http.post(window.url + "/api/setting/all", {
                    }, {
                        headers: {
                            "Accept": "application/json",
                            "Authorization": "Bearer " + window.localStorage.getItem("access_token"),
                            "X-CSRF-TOKEN": window.csrf_token
                        }
                    }).then((response) => {
                        window.localStorage.setItem("settings", JSON.stringify(response.body));
                        window.settings = response.body;
                    }, response => {
                        window.alert("初始化失败！");
                    });
                }
                if (window.localStorage.getItem("settings") !== null) {
                    window.settings = JSON.parse(window.localStorage.getItem("settings"));
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