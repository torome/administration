import store from '../stores';

export default {
    xml: {
        get() {
            const state = store.state.setting['sitemap.xml'];
            if (state === '1' || state === '0') {
                return state === '1';
            }
            return state ? 'open' : 'close';
        },
        set(val) {
            store.commit('single', {
                key: 'sitemap.xml',
                value: val === 'open',
            });
        },
    },
    html: {
        get() {
            const state = store.state.setting['sitemap.html'];
            if (state === '1' || state === '0') {
                return state === '1';
            }
            return state ? 'open' : 'close';
        },
        set(val) {
            store.commit('single', {
                key: 'sitemap.html',
                value: val === 'open',
            });
        },
    },
    cycle: {
        get() {
            const state = store.state.setting['sitemap.cycle'];
            if (state === '1' || state === '0') {
                return state === '1';
            }
            return state ? 'open' : 'close';
        },
        set(val) {
            store.commit('single', {
                key: 'sitemap.cycle',
                value: val === 'open',
            });
        },
    },
    recently: {
        get() {
            const state = store.state.setting['sitemap.recently'];
            if (state === '1' || state === '0') {
                return state === '1';
            }
            return state ? 'open' : 'close';
        },
        set(val) {
            store.commit('single', {
                key: 'sitemap.recently',
                value: val === 'open',
            });
        },
    },
};
