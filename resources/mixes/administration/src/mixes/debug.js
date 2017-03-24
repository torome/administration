export default function (injection) {
    Object.defineProperties(injection, {
        console: {
            get() {
                return {
                    log(...args) {
                        args.forEach(arg => {
                            window.console.log(arg);
                        });
                    },
                };
            },
        },
    });
}
