import { i18n, t } from '../local';

export default function (injection) {
    Object.defineProperties(injection, {
        i18n: {
            get() {
                return i18n;
            },
        },
        trans: {
            get() {
                return t;
            },
        },
    });
}
