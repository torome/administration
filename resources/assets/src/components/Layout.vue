<script>
    import SidebarMenu from "./SidebarMenu";
    import LayoutContent from "./Content";
    import LayoutFooter from "./LayoutFooter";
    import LayoutHeader from "./LayoutHeader";
    import LayoutSidebar from "./Sidebar";
    import Logo from "./Logo";
    import NavbarMenu from "./NavbarMenu";
    export default {
        components: {
            SidebarMenu,
            LayoutContent,
            LayoutFooter,
            LayoutHeader,
            LayoutSidebar,
            Logo,
            NavbarMenu
        },
        data: () => {
            return {
                menu: [
                    {
                        "text": "基础",
                        "icon": "fa fa-cogs",
                        "uri": "/"
                    }
                ],
                nav: [
                    {
                        text: "全局设置",
                        icon: "fa fa-globe",
                        uri: "/"
                    },
                    {
                        text: "附件设置",
                        icon: "fa fa-cloud-upload",
                        uri: "/upload",
                        menu: [
                            {
                                text: "上传设置",
                                icon: "fa fa-upload",
                                uri: "/upload"
                            },
                            {
                                text: "存储设置",
                                icon: "fa fa-cloud",
                                uri: "/storage"
                            },
                            {
                                text: "水印设置",
                                icon: "fa fa-circle-o",
                                uri: "/watermark"
                            },
                            {
                                text: "CDN 设置",
                                icon: "fa fa-circle-o",
                                uri: "/cdn"
                            }
                        ]
                    },
                    {
                        text: "导航栏",
                        icon: "fa fa-navicon",
                        uri: "/navbar"
                    },
                    {
                        text: "SEO 设置",
                        icon: "fa fa-search",
                        uri: "/seo"
                    },
                    {
                        text: "站点地图",
                        icon: "fa fa-sitemap",
                        uri: "/sitemap"
                    },
                    {
                        text: "邮件设置",
                        icon: "fa fa-envelope-o",
                        uri: "/email",
                        menu: [
                            {
                                text: "邮件设置",
                                icon: "fa fa-envelope-o",
                                uri: "/email"
                            },
                            {
                                text: "邮件测试",
                                icon: "fa fa-cloud",
                                uri: "/email/test"
                            }
                        ]
                    },
                    {
                        text: "伪静态设置",
                        icon: "fa fa-link",
                        uri: "/rewrite"
                    },
                    {
                        text: "路由设置",
                        icon: "fa fa-cogs",
                        uri: "/route"
                    },
                    {
                        text: "调试工具",
                        icon: "fa fa-exclamation",
                        uri: "/debug"
                    },
                    {
                        text: "数据库管理",
                        icon: "fa fa-database",
                        uri: "/database"
                    }
                ]
            };
        }
    };
</script>
<template>
    <div class="wrapper">
        <layout-header>
            <navbar-menu slot="menu" :menu="menu"></navbar-menu>
        </layout-header>
        <layout-sidebar>
            <sidebar-menu :menu="nav"></sidebar-menu>
        </layout-sidebar>
        <layout-content>
            <router-view></router-view>
        </layout-content>
        <layout-footer></layout-footer>
    </div>
</template>