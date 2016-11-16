<script>
    import Vue from "vue";
    export default {
        route: {
            activate: function (transition) {
                if (window.localStorage.getItem("access_token") === null) {
                    this.$router.go("login");
                } else {
                    Vue.http.headers.common["Accept"] = "application/json";
                    Vue.http.headers.common["Authorization"] = "Bearer " + window.localStorage.getItem("access_token");
                    Vue.http.headers.common["X-CSRF-TOKEN"] = window.csrf_token;
                    if (window.localStorage.getItem("settings") === null && transition.to.path !== "login") {
                        this.$http.post(window.api + "/setting/all", {
                            "_token": window.csrf_token
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
                }
                transition.next();
            }
        }
    };
</script>
<style>
    .btn-switch > .btn {
        position: relative;
    }
    .btn-switch > .btn > input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        opacity: 0;
        margin: 0;
        padding: 0;
    }
    .form-horizontal > .box-footer > .form-group > .col-sm-offset-3 > button {
        width: 100%;
    }
</style>
<template>
    <router-view></router-view>
</template>