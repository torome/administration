<script>
    export default {
        route: {
            activate: function (transition) {
                if (window.localStorage.getItem("access_token") === null) {
                    this.$router.go("login");
                } else {
                    if (window.localStorage.getItem("settings") === null && transition.to.path !== "login") {
                        this.$http.post(window.api + "/setting/all", {
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
                }
                if (window.localStorage.getItem("settings") !== null) {
                    window.settings = JSON.parse(window.localStorage.getItem("settings"));
                }
                transition.next();
            }
        }
    };
</script>
<style>
    .form-horizontal > .box-footer > .form-group > .col-sm-offset-3 > button {
        width: 100%;
    }
</style>
<template>
    <router-view></router-view>
</template>