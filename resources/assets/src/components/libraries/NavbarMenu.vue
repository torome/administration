<script>
  export default {
    props: {
      menu: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
<style>
</style>
<template>
    <div class="navbar-custom-menu pull-left">
        <ul class="nav navbar-nav">
            <li v-for="item in menu">
                <router-link :to="item.uri" :class="item.icon">
                    <span class="hidden-xs">{{ item.text }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>