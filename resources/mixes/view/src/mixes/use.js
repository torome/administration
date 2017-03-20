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
            injection.router.extension.concat(data);
        },
        useModuleRoute(routes) {
            const data = [].concat(routes);
            const tmp = [];
            data.forEach(value => {
                injection.routes.module.push(value);
                tmp.push(value);
            });
            console.log(tmp);
            console.log(injection.routes.module);
        },
        useOtherRoute(routes) {
            const data = [].concat(routes);
            injection.router.other.concat(data);
        },
    };

    Object.assign(injection, methods);
}
