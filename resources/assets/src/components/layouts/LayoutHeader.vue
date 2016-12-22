<script>
  export default {}
</script>
<style scoped>
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
            <slot name="menu"></slot>
        </nav>
    </header>
</template>