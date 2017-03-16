<script>
    export default {
        data() {
            return {
                spanLeft: 5,
                spanRight: 19,
            };
        },
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            },
        },
        methods: {
            logout() {
                console.log('Logout!');
            },
            toggleClick() {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
        },
    };
</script>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <i-menu :accordion="true" theme="dark" width="auto">
                    <div class="layout-logo-left">Notadd 后台管理</div>
                    <menu-item name="0">
                        <router-link to="/setting">
                            <icon type="ios-cog"></icon>
                            全局设置
                        </router-link>
                    </menu-item>
                    <submenu name="1">
                        <template slot="title">
                            <icon type="ios-paper"></icon>
                            附件设置
                        </template>
                        <menu-item name="1-1">
                            <router-link to="/upload">上传设置</router-link>
                        </menu-item>
                    </submenu>
                    <menu-item name="2">
                        <router-link to="/seo">
                            <icon type="ios-browsers"></icon>
                            全局SEO设置
                        </router-link>
                    </menu-item>
                    <menu-item name="3">
                        <router-link to="/module">
                            <icon type="grid"></icon>
                            模块配置
                        </router-link>
                    </menu-item>
                    <submenu name="4">
                        <template slot="title">
                            <icon type="stats-bars"></icon>
                            系统组件
                        </template>
                        <menu-item name="4-1">
                            <router-link to="/navigation">导航管理</router-link>
                        </menu-item>
                        <menu-item name="4-2">
                            <router-link to="/mail">邮件设置</router-link>
                        </menu-item>
                        <menu-item name="4-3">
                            <router-link to="/debug">调试工具</router-link>
                        </menu-item>
                    </submenu>
                    <submenu name="5">
                        <template slot="title">
                            <icon type="plus"></icon>
                            插件管理
                        </template>
                        <menu-item name="5-1">
                            <router-link to="/extension">插件配置</router-link>
                        </menu-item>
                        <menu-item name="5-2">
                            <router-link to="/sitemap">网站地图</router-link>
                        </menu-item>
                    </submenu>
                </i-menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click.native="toggleClick">
                        <icon type="navicon" size="32"></icon>
                    </i-button>
                    <i-menu mode="horizontal" theme="light">
                        <menu-item name="t1">
                            <router-link to="/">
                                <icon type="settings"></icon>
                                全局
                            </router-link>
                        </menu-item>
                        <menu-item name="t2">
                            <router-link to="/content">
                                <icon type="document-text"></icon>
                                文章
                            </router-link>
                        </menu-item>
                    </i-menu>
                    <i-menu mode="horizontal" theme="light" active-name="1">
                        <submenu name="3">
                            <template slot="title">
                                <icon type="person"></icon>
                                后台管理员
                            </template>
                            <menu-item name="3-1" @click.native="logout">退出</menu-item>
                        </submenu>
                    </i-menu>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">2017 &copy; Notadd</div>
            </i-col>
        </row>
    </div>
</template>
