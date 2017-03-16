import store from '../stores';

export default {
    description: {
        get() {
            return store.state.setting['seo.description'];
        },
        set(val) {
            store.commit('single', {
                key: 'seo.description',
                value: val,
            });
        },
    },
    keyword: {
        get() {
            return store.state.setting['seo.keyword'];
        },
        set(val) {
            store.commit('single', {
                key: 'seo.keyword',
                value: val,
            });
        },
    },
    title: {
        get() {
            return store.state.setting['seo.title'];
        },
        set(val) {
            store.commit('single', {
                key: 'seo.title',
                value: val,
            });
        },
    },
};
