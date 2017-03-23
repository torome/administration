export default function (injection) {
    Object.defineProperties(injection, {
        debug: {
            get() {
                return {
                    console: {
                        log(...args) {
                            window.console.log(args);
                        },
                    },
                };
            },
        },
    });
}
