<script>
    import Logo from "./Logo.vue";
    export default {
        components: {Logo}
    };
</script>
<template>
    <header class="main-header">
        <slot name="logo">
            <logo></logo>
        </slot>
        <nav class="navbar navbar-static-top" role="navigation">
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <slot name="menu"></slot>
        </nav>
    </header>
</template>