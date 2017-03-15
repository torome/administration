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
                <i-menu active-name="1-2" :open-names="['1']" theme="dark" width="auto">
                    <div class="layout-logo-left">Notadd 后台管理</div>
                    <submenu name="1">
                        <template slot="title"><icon type="ios-paper"></icon>内容管理</template>
                        <menu-item name="1-1">文章管理</menu-item>
                        <menu-item name="1-2">评论管理</menu-item>
                        <menu-item name="1-3">举报管理</menu-item>
                    </submenu>
                    <submenu name="2">
                        <template slot="title"><icon type="ios-people"></icon>用户管理</template>
                        <menu-item name="2-1">新增用户</menu-item>
                        <menu-item name="2-2">活跃用户</menu-item>
                    </submenu>
                    <submenu name="3">
                        <template slot="title"><icon type="stats-bars"></icon>统计分析</template>
                        <menu-group title="使用">
                            <menu-item name="3-1">新增和启动</menu-item>
                            <menu-item name="3-2">活跃分析</menu-item>
                            <menu-item name="3-3">时段分析</menu-item>
                        </menu-group>
                        <menu-group title="留存">
                            <menu-item name="3-4">用户留存</menu-item>
                            <menu-item name="3-5">流失用户</menu-item>
                        </menu-group>
                    </submenu>
                </i-menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click.native="toggleClick">
                        <icon type="navicon" size="32"></icon>
                    </i-button>
                    <i-menu mode="horizontal" theme="light" active-name="1">
                        <menu-item name="1"><icon type="ios-paper"></icon>内容管理</menu-item>
                        <menu-item name="2"><icon type="ios-people"></icon>用户管理</menu-item>
                        <submenu name="3">
                            <template slot="title"><icon type="stats-bars"></icon>统计分析</template>
                            <menu-group title="使用">
                                <menu-item name="3-1">新增和启动</menu-item>
                                <menu-item name="3-2">活跃分析</menu-item>
                                <menu-item name="3-3">时段分析</menu-item>
                            </menu-group>
                            <menu-group title="留存">
                                <menu-item name="3-4">用户留存</menu-item>
                                <menu-item name="3-5">流失用户</menu-item>
                            </menu-group>
                        </submenu>
                        <menu-item name="4"><icon type="settings"></icon>综合设置</menu-item>
                    </i-menu>
                    <i-menu mode="horizontal" theme="light" active-name="1">
                        <submenu name="3">
                            <template slot="title"><icon type="person"></icon>后台管理员</template>
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
