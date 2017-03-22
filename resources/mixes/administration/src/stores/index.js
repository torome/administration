import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
    setting: {},
    title: 'Notadd Administration',
    token: {},
    user: {
        avatar: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg',
        name: 'Admin',
    },
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
});
