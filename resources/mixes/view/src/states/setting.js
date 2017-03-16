import store from '../stores';

export default {
    enabled: {
        get() {
            const state = store.state.setting['site.enabled'];
            if (state === '1' || state === '0') {
                return state === '1';
            }
            return state ? 'open' : 'close';
        },
        set(val) {
            store.commit('single', {
                key: 'site.enabled',
                value: val === 'open',
            });
        },
    },
    name: {
        get() {
            return store.state.setting['site.name'];
        },
        set(val) {
            store.commit('single', {
                key: 'site.name',
                value: val,
            });
        },
    },
    domain: {
        get() {
            return store.state.setting['site.domain'];
        },
        set(val) {
            store.commit('single', {
                key: 'site.domain',
                value: val,
            });
        },
    },
    beian: {
        get() {
            return store.state.setting['site.beian'];
        },
        set(val) {
            store.commit('single', {
                key: 'site.beian',
                value: val,
            });
        },
    },
    company: {
        get() {
            return store.state.setting['site.company'];
        },
        set(val) {
            store.commit('single', {
                key: 'site.company',
                value: val,
            });
        },
    },
    copyright: {
        get() {
            return store.state.setting['site.copyright'];
        },
        set(val) {
            store.commit('single', {
                key: 'site.copyright',
                value: val,
            });
        },
    },
    statistics: {
        get() {
            return store.state.setting['site.statistics'];
        },
        set(val) {
            store.commit('single', {
                key: 'site.statistics',
                value: val,
            });
        },
    },
};
