import promiseFinally from 'promise.prototype.finally';

import mixinAxios from './axios';

promiseFinally.shim();

export function mixinVue(injection, Vue) {
    Object.defineProperties(injection, {
        vue: {
            get() {
                return Vue;
            },
        },
    });
}

export {
    mixinAxios,
};

