<script>
    export default {
        props: {
            menu: {
                type: Array,
                default: () => []
            }
        }
    };
</script>
<template>
    <div class="navbar-custom-menu pull-left">
        <ul class="nav navbar-nav">
            <li v-for="item in menu">
                <a v-link="item.uri">
                    <i class="{{ item.icon }}"></i>
                    <span class="hidden-xs">{{ item.text }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>