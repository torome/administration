import Vue from 'vue';
import deepmerge from 'deepmerge';
import Format from './format';

const format = Format(Vue);
let lang = window.local || {};
let merged = false;
let i18nHandler = function i18nHandler(...args) {
    const vuei18n = Object.getPrototypeOf(this || Vue).$t;
    if (typeof vuei18n === 'function') {
        if (!merged) {
            merged = true;
            Vue.locale(
                Vue.config.lang,
                deepmerge(lang, Vue.locale(Vue.config.lang) || {}, { clone: true }),
            );
        }
        return vuei18n.apply(this, args);
    }
    return null;
};

export function t(path, options, ...args) {
    const value = i18nHandler.apply(this, args);
    if (value !== null && value !== undefined) return value;

    if (lang[path]) {
        return format(lang[path], options);
    }
    return path;
}

export function use(l) {
    lang = l || lang;
}

export function i18n(fn) {
    i18nHandler = fn || i18nHandler;
}

export default { use, t, i18n };
