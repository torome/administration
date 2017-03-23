export default function (injection) {
    Object.defineProperties(injection, {
        console: {
            get() {
                return {
                    log(...args) {
                        window.console.log(args);
                    },
                };
            },
        },
    });
}
