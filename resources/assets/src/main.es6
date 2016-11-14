import "font-awesome/less/font-awesome.less";
import "bootstrap/less/bootstrap.less";
import "./less/main.less";
import "./less/skins/all-skins.less";
import "bootstrap";
import "../statices/scripts/app";
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