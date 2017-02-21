<script>
  export default {
    computed: {
      avatar: {
        get () {
          return this.$store.state.user.avatar
        }
      },
      username: {
        get () {
          return this.$store.state.user.name
        }
      }
    },
    methods: {
      logout: function () {
        window.localStorage.clear()
        this.$router.go('login')
      }
    },
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

    .extend-menu {
        margin-right: 20px;
    }

    .btn-danger {
        padding-left: 30px;
        padding-right: 30px;
    }

    .navbar-custom-menu > .navbar-nav > li {
        margin-right: 24px;
    }
</style>
<template>
    <header class="main-header hidden-xs">
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
            <div class="navbar-custom-menu extend-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <span class="hidden-xs">欢迎您，</span> {{ username }}
                        </a>
                        <ul class="dropdown-menu">
                            <li class="user-header">
                                <img src="../../../static/images/avatar.svg" class="img-circle" :alt="username">
                                <p>{{ username }}</p>
                            </li>
                            <li class="user-footer">
                                <div class="pull-right">
                                    <button class="btn btn-danger" @click="logout">退出</button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>