import VueRouter from '../router';

import requireAuth from '../middlewares/auth';

export default function (injection) {
    Object.defineProperties(injection, {
        middleware: {
            get() {
                return {
                    requireAuth,
                };
            },
        },
        router: {
            get() {
                return VueRouter;
            },
        },
        routes: {
            get() {
                return {
                    base: [],
                    extension: [],
                    module: [],
                    other: [],
                };
            },
        },
    });
}
