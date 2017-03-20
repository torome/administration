export default function (injection) {
    const sources = window.extensions ? window.extensions : [];
    const list = [];
    sources.forEach(key => {
        if (window[key]) {
            list.push(window[key]);
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
