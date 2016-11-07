import "bootstrap/less/bootstrap.less";
import "bootstrap";
import "font-awesome/less/font-awesome.less";
import "ionicons/dist/scss/ionicons.scss";
import "meat-dashboard/less/AdminLTE.less";
import "meat-dashboard/less/skins/skin-blue.less";
import "meat-dashboard";
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueValidator from "vue-validator";
import {Shared} from "./shared";
import {UiAuth} from "./components";
import BasicModule from "./basic-module/bootstrap";
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.http.options.root = "/static/mock-data";
BasicModule(Shared);
let router = new VueRouter({
    hashbang: true,
    history: false
});
/* eslint-disable */
Shared.accessToken = Cookies.get("access_token");
/* eslint-enable */
router.map(Shared.routerMap).start(UiAuth, "app");
