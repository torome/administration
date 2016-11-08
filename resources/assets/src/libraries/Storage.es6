import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        access_token: null,
        expires_in: -1,
        refresh_token: null
    },
    mutations: {
        access_token (state, value) {
            state.access_token = value;
        },
        expires_in (state, value) {
            state.access_token = value;
        },
        refresh_token (state, value) {
            state.access_token = value;
        }
    }
});