<script>
    import injection from '../helpers/injection';

    export default {
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            },
        },
        created() {
            Object.assign(injection.sidebar, {
                active: this.active,
            });
        },
        data() {
            return {
                navigation: injection.navigation,
                sidebar: [],
                spanLeft: 5,
                spanRight: 19,
            };
        },
        methods: {
            active(key) {
                if (injection.sidebar.lists[key]) {
                    this.sidebar = injection.sidebar.lists[key];
                }
            },
            logout() {
                window.localStorage.clear();
                this.$router.push('/login');
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
        watch: {
            navigation: {
                deep: true,
                handler(val) {
                    console.log(val);
                },
            },
        },
    };
</script>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <div class="layout-left">
            <i-menu :accordion="true" theme="dark" width="auto">
                <div class="layout-logo-left">Notadd 后台管理</div>
                <template v-for="(item, key) in sidebar">
                    <submenu :name="'sidebar-' + key" v-if="item.children">
                        <template slot="title">
                            <icon :type="item.icon"></icon>
                            {{ item.title }}
                        </template>
                        <menu-item :name="'sidebar-' + key + '-' + index" v-for="(sub, index) in item.children"
                                   :key="index">
                            <router-link :to="sub.path">{{ sub.title }}</router-link>
                        </menu-item>
                    </submenu>
                    <menu-item :name="'sidebar-' + key" v-else>
                        <router-link :to="item.path">
                            <icon :type="item.icon"></icon>
                            {{ item.title }}
                        </router-link>
                    </menu-item>
                </template>
            </i-menu>
        </div>
        <div class="layout-header">
            <i-button type="text" @click.native="toggleClick">
                <icon type="navicon" size="32"></icon>
            </i-button>
            <i-menu mode="horizontal" theme="light">
                <menu-item :name="'nav-' + key" v-for="(nav, key) in navigation" :key="key">
                    <router-link :to="nav.path">
                        <icon :type="nav.icon"></icon>
                        {{ nav.title }}
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
            <div class="layout-copy">2017 &copy; Notadd</div>
        </div>
    </div>
</template>
