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
        useBaseRoute(routes) {
            const data = [].concat(routes);
            injection.routes.base.concat(data);
        },
        useExtensionRoute(routes) {
            const data = [].concat(routes);
            injection.router.extension.concat(data);
        },
        useModuleRoute(routes) {
            const data = [].concat(routes);
            injection.router.module.concat(data);
        },
        useOtherRoute(routes) {
            const data = [].concat(routes);
            injection.router.other.concat(data);
        },
    };

    Object.assign(injection, methods);
}
