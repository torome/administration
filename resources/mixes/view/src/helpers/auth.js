import Vue from 'vue';
import store from '../stores';

export default {
    isLogin() {
        const token = JSON.parse(window.localStorage.getItem('token'));
        if (token && token.access_token && token.refresh_token) {
            Vue.http.defaults.headers.common.Accept = 'application/json';
            Vue.http.defaults.headers.common.Authorization = `Bearer ${token.access_token}`;
            if (JSON.stringify(store.state.token) === '{}') {
                store.commit('token', token);
            }
            const setting = store.state.setting;
            if (JSON.stringify(setting) === '{}') {
                console.log(setting);
            }
            return true;
        }
        return false;
    },
};
