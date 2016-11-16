import "font-awesome/less/font-awesome.less";
import "bootstrap/less/bootstrap.less";
import "./less/main.less";
import "./less/skins/all-skins.less";
import "slimscroll/example/ssmaster/jquery.slimscroll";
import "bootstrap";
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
})).map(routes).start(App, "app");