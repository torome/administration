<script>
  export default {
    props: [
      'menu'
    ]
  }
</script>
<style scoped>
    .icon {
        padding-left: 36px;
    }
    .icon-home {
        background: url("../../../static/images/home.svg") 10px center no-repeat;
        background-size: 20px;
    }
    .icon-home:hover {
        background: #f7f7f7 url("../../../static/images/home.svg") 10px center no-repeat !important;
        background-size: 20px !important;
    }
    .icon-article {
        background: url("../../../static/images/article-manage.svg") 10px center no-repeat;
        background-size: 20px;
    }
    .icon-article:hover {
        background: #f7f7f7 url("../../../static/images/article-manage.svg") 10px center no-repeat !important;
        background-size: 20px !important;
    }
    .icon-wechat {
        background: url("../../../static/images/wechat.svg") 10px center no-repeat;
        background-size: 20px;
    }
    .icon-wechat:hover {
        background: #f7f7f7 url("../../../static/images/wechat.svg") 10px center no-repeat !important;
        background-size: 20px !important;
    }
    .logo-mini {
        background: url(../../../static/images/logo.svg);
        height: 90px;
        margin-left: -15px !important;
        width: 90px;
    }
    .logo-lg {
        background: url("../../../static/images/logo-big.svg") 20px center no-repeat;
        height: 90px;
        padding-left: 170px;
        padding-top: 5px;
        text-align: left;
    }
    .navbar-static-top {
        box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
    }
</style>
<template>
    <header class="main-header">
        <router-link class="logo" to="/">
            <span class="logo-mini"></span>
            <span class="logo-lg">管理后台</span>
        </router-link>
        <nav class="navbar navbar-static-top" role="navigation">
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <div class="navbar-custom-menu pull-left">
                <ul class="nav navbar-nav">
                    <li v-for="item in menu">
                        <router-link :to="item.uri" :class="item.icon">
                            <span class="hidden-xs">{{ item.text }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>