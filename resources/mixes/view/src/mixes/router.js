import VueRouter from '../router';

export default function (injection) {
    Object.defineProperties(injection, {
        router: {
            get() {
                return VueRouter;
            },
        },
        routes: {
            get() {
                return {
                    extension: [],
                    module: [],
                    other: [],
                };
            },
        },
    });
}
