export default function mapRoutes(routes, basePath = '') {
    const map = {};
    for (const key in routes) {
        const route = routes[key];
        if (route.component) route.component.props.routeName = key;
        map[basePath + route.path] = route.component;
    }
    return map;
}