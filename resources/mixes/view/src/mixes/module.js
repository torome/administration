export default function (injection) {
    const sources = window.modules ? window.modules : [];
    const list = [];
    sources.forEach(key => {
        if (window[key]) {
            list.push(window[key].default);
        }
    });

    Object.defineProperties(injection, {
        modules: {
            get() {
                return list;
            },
        },
    });
}
