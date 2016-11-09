import "bootstrap/less/bootstrap.less";
import "bootstrap";
import "font-awesome/less/font-awesome.less";
import "ionicons/dist/scss/ionicons.scss";
import "meat-dashboard/less/AdminLTE.less";
import "meat-dashboard/less/skins/skin-blue.less";
import "meat-dashboard";
import Auth from "./components/Auth.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueValidator from "vue-validator";
import Vuex from "vuex";
import {Shared} from "./shared";
import BasicModule from "./bootstrap";
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.use(Vuex);
BasicModule(Shared);
let router = new VueRouter({
    hashbang: true,
    history: false
});
router.map(Shared.routerMap).start(Auth, "app");