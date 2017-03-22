import VueRouter from '../router';

import requireAuth from '../middlewares/auth';

export default function (injection) {
    Object.assign(injection, {
        middleware: {
            requireAuth,
        },
        routes: {
            extension: [],
            module: [],
            other: [],
        },
    });

    Object.defineProperties(injection, {
        router: {
            get() {
                return VueRouter.init(injection);
            },
        },
    });
}
