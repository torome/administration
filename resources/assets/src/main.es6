import "font-awesome/less/font-awesome.less";
import "bootstrap/less/bootstrap.less";
import "./less/main.less";
import "./less/skins/all-skins.less";
import "slimscroll/example/ssmaster/jquery.slimscroll";
import "../statices/scripts/app";
import App from "./components/App";
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueValidator from "vue-validator";
import Vuex from "vuex";
import routes from "./routes";
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.use(Vuex);
(new VueRouter({
    hashbang: true,
    history: false
})).beforeEach(transition => {
    if (transition.to.path === "/login") {
        Vue.http.headers.common["X-CSRF-TOKEN"] = window.csrf_token;
    } else {
        if (window.localStorage.getItem("access_token") === null || window.localStorage.getItem("access_token") === null) {
            transition.redirect("login");
        } else {
            Vue.http.headers.common["Accept"] = "application/json";
            Vue.http.headers.common["Authorization"] = "Bearer " + window.localStorage.getItem("access_token");
            if (window.localStorage.getItem("settings") === null) {
                Vue.http.post(window.api + "/setting/all").then((response) => {
                    window.localStorage.setItem("settings", JSON.stringify(response.body));
                    window.settings = response.body;
                    transition.next();
                }, response => {
                    console.log("初始化失败！");
                });
            } else {
                window.settings = JSON.parse(window.localStorage.getItem("settings"));
                transition.next();
            }
        }
    }
}).map(routes).start(App, "app");