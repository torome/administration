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
      toggleClick() {
        console.log('dfdf');
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
<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout-hide-text .layout-text {
        display: none;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <menu-item name="1">
                        <icon type="ios-navigate" :size="iconSize"></icon>
                        <span class="layout-text">选项 1</span>
                    </menu-item>
                    <menu-item name="2">
                        <icon type="ios-keypad" :size="iconSize"></icon>
                        <span class="layout-text">选项 2</span>
                    </menu-item>
                    <menu-item name="3">
                        <icon type="ios-analytics" :size="iconSize"></icon>
                        <span class="layout-text">选项 3</span>
                    </menu-item>
                </menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <icon type="navicon" size="32"></icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <breadcrumb>
                        <breadcrumb-item href="#">首页</breadcrumb-item>
                        <breadcrumb-item href="#">应用中心</breadcrumb-item>
                        <breadcrumb-item>某应用</breadcrumb-item>
                    </breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">内容区域</div>
                </div>
                <div class="layout-copy">2017 &copy; Notadd</div>
            </i-col>
        </row>
    </div>
</template>
