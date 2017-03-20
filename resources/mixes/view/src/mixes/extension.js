export default function (injection) {
    const sources = window.extensions ? window.extensions : [];
    const list = [];
    sources.forEach(key => {
        if (window[key]) {
            const instance = window[key].default;
            injection.use(instance);
            list.push(instance);
        }
    });

    Object.defineProperties(injection, {
        extensions: {
            get() {
                return list;
            },
        },
    });
}
