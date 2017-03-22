export default function (injection) {
    Object.assign(injection, {
        navigation: [
            {
                icon: 'settings',
                path: '/',
                title: injection.trans('administration.menu.header.global'),
            },
        ],
    });
}
