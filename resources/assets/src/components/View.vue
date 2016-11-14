<script>
    import Sidebar from "./Sidebar.vue";
    import SidebarMenu from "./SidebarMenu.vue";
    import Content from "./Content.vue";
    export default {
        components: {
            Sidebar, SidebarMenu, Content
        },
        data: () => {
            return {
                menu: [
                    {
                        text: "全局设置",
                        icon: "fa fa-globe",
                        uri: "/"
                    },
                    {
                        text: "附件设置",
                        icon: "fa fa-cloud-upload",
                        uri: "",
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
                            },
                            {
                                text: "模块管理",
                                icon: "fa fa-maxcdn",
                                uri: "/module"
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
                        uri: "/email"
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
    <sidebar>
        <sidebar-menu :menu="menu"></sidebar-menu>
    </sidebar>
    <content>
        <router-view></router-view>
    </content>
</template>