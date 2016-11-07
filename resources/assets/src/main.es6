import "bootstrap/less/bootstrap.less";
import "bootstrap";
import "font-awesome/less/font-awesome.less";
import "ionicons/dist/scss/ionicons.scss";
import "meat-dashboard/less/AdminLTE.less";
import "meat-dashboard/less/skins/skin-blue.less";
import "meat-dashboard";
import Auth from "./components/Auth.vue";
import Vue from "vue";
import VueCookie from "vue-cookie";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueValidator from "vue-validator";
import {Shared} from "./shared";
import BasicModule from "./bootstrap";
Vue.use(VueCookie);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.http.options.root = "/static/mock-data";
BasicModule(Shared);
let router = new VueRouter({
    hashbang: true,
    history: false
});
Shared.accessToken = VueCookie.get("access_token");
router.map(Shared.routerMap).start(Auth, "app");