export default function (injection) {
    Object.assign(injection, {
        sidebar: {
            active: null,
            lists: {
                setting: [
                    {
                        children: [
                            {
                                path: '/setting',
                                title: injection.trans('administration.menu.sidebar.global.configuration'),
                            },
                            {
                                path: '/seo',
                                title: injection.trans('administration.menu.sidebar.global.seo'),
                            },
                        ],
                        icon: 'ios-cog',
                        title: injection.trans('administration.menu.sidebar.global.group'),
                    },
                    {
                        children: [
                            {
                                path: '/upload',
                                title: injection.trans('administration.menu.sidebar.attachment.upload'),
                            },
                        ],
                        icon: 'ios-paper',
                        title: injection.trans('administration.menu.sidebar.attachment.group'),
                    },
                    {
                        children: [
                            {
                                path: '/module',
                                title: injection.trans('administration.menu.sidebar.application.module'),
                            },
                            {
                                path: '/extension',
                                title: injection.trans('administration.menu.sidebar.application.extension'),
                            },
                            {
                                path: '/template',
                                title: injection.trans('administration.menu.sidebar.application.template'),
                            },
                            {
                                path: '/expand',
                                title: injection.trans('administration.menu.sidebar.application.expand'),
                            },
                        ],
                        icon: 'plus',
                        title: injection.trans('administration.menu.sidebar.application.group'),
                    },
                    {
                        children: [
                            {
                                path: '/sitemap',
                                title: '网站地图',
                            },
                        ],
                        icon: 'plus',
                        title: injection.trans('administration.menu.sidebar.extension.group'),
                    },
                    {
                        children: [
                            // {
                            //     path: '/navigation',
                            //     title: '导航管理',
                            // },
                            {
                                path: '/mail',
                                title: injection.trans('administration.menu.sidebar.component.mail'),
                            },
                            {
                                path: '/debug',
                                title: injection.trans('administration.menu.sidebar.component.debug'),
                            },
                        ],
                        icon: 'stats-bars',
                        title: injection.trans('administration.menu.sidebar.component.group'),
                    },
                ],
            },
        },
    });
}
