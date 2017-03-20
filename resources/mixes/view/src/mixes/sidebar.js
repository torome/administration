export default function (injection) {
    Object.assign(injection, {
        sidebar: {
            active(key) {
                if (injection.sidebar.lists[key]) {
                    Object.assign(injection.sidebar, {
                        current: injection.sidebar.lists[key],
                    });
                } else {
                    console.log(`sidebar ${key} do not exists!`);
                }
            },
            current: [],
            lists: {
                setting: [
                    {
                        children: [
                            {
                                path: '/setting',
                                title: '参数配置',
                            },
                            {
                                path: '/seo',
                                title: 'SEO设置',
                            },
                        ],
                        icon: 'ios-cog',
                        title: '全局设置',
                    },
                    {
                        children: [
                            {
                                path: '/upload',
                                title: '上传设置',
                            },
                        ],
                        icon: 'ios-paper',
                        title: '附件设置',
                    },
                    {
                        children: [
                            {
                                path: '/module',
                                title: '模块配置',
                            },
                            {
                                path: '/extension',
                                title: '插件配置',
                            },
                            {
                                path: '/template',
                                title: '模板配置',
                            },
                            {
                                path: '/expand',
                                title: '拓展配置',
                            },
                        ],
                        icon: 'plus',
                        title: '应用管理',
                    },
                    {
                        children: [
                            {
                                path: '/sitemap',
                                title: '网站地图',
                            },
                        ],
                        icon: 'plus',
                        title: '全局插件',
                    },
                    {
                        children: [
                            {
                                path: '/navigation',
                                title: '导航管理',
                            },
                            {
                                path: '/mail',
                                title: '邮件设置',
                            },
                            {
                                path: '/debug',
                                title: '调试工具',
                            },
                        ],
                        icon: 'stats-bars',
                        title: '系统组件',
                    },
                ],
            },
        },
    });
}
