import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        access_token: null,
        csrf_token: "",
        expires_in: -1,
        url: "",
        refresh_token: null,
        settings: null
    },
    mutations: {
        access_token (state, value) {
            state.access_token = value;
        },
        csrf_token (state, value) {
            state.csrf_token = value;
        },
        expires_in (state, value) {
            state.access_token = value;
        },
        url (state, value) {
            state.url = value;
        },
        refresh_token (state, value) {
            state.access_token = value;
        }
    }
});