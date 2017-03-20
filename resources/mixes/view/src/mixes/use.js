export default function (injection) {
    const methods = {
        use(plugin) {
            if (plugin.installed) {
                return false;
            }

            if (typeof plugin.install === 'function') {
                plugin.install(injection);
            } else if (typeof plugin === 'function') {
                plugin(injection);
            }

            plugin.installed = true;
            return this;
        },
        useExtensionRoute(routes) {
            const data = [].concat(routes);
            data.forEach(value => {
                injection.routes.extension.push(value);
            });
        },
        useModuleRoute(routes) {
            const data = [].concat(routes);
            data.forEach(value => {
                injection.routes.module.push(value);
            });
        },
        useOtherRoute(routes) {
            const data = [].concat(routes);
            data.forEach(value => {
                injection.routes.other.push(value);
            });
        },
    };

    Object.assign(injection, methods);
}
