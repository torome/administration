import store from '../stores';

export default {
    enabled: {
        get() {
            const state = store.state.setting['debug.enabled'];
            if (state === '1' || state === '0') {
                return state === '1';
            }
            return state ? 'open' : 'close';
        },
        set(val) {
            store.commit('single', {
                key: 'debug.enabled',
                value: val === 'open',
            });
        },
    },
};
