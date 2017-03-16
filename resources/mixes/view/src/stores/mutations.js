/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */

import Vue from 'vue';

export const setting = (state, payload) => {
    state.setting = payload;
};

export const single = (state, payload) => {
    Vue.set(state.setting, payload.key, payload.value);
};

export const title = (state, payload) => {
    state.title = payload;
    global.document.title = payload;
};

export const token = (state, payload) => {
    window.localStorage.setItem('token', JSON.stringify(payload));
    state.token = payload;
};
