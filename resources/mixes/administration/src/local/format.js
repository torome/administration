const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

export default function (Vue) {
    const { hasOwn } = Vue.util;

    function template(string, ...args) {
        let argument;

        if (args.length === 1 && typeof args[0] === 'object') {
            argument = args[0];
        }

        if (!args || !args.hasOwnProperty) {
            argument = {};
        }

        return string.replace(RE_NARGS, (match, prefix, i, index) => {
            if (string[index - 1] === '{' &&
                string[index + match.length] === '}') {
                return i;
            }
            const result = hasOwn(argument, i) ? argument[i] : null;
            if (result === null || result === undefined) {
                return '';
            }

            return result;
        });
    }

    return template;
}
