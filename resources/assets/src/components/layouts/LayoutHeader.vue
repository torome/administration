<script>
    export default {}
</script>
<template>
    <header class="main-header">
        <router-link class="logo" to="/">
            <span class="logo-mini"><b>N</b>A</span>
            <span class="logo-lg"><b>Not</b>Add</span>
        </router-link>
        <nav class="navbar navbar-static-top" role="navigation">
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <slot name="menu"></slot>
        </nav>
    </header>
</template>