<script>
  export default {
  }
</script>
<style lang="css">
    .btn-switch > .btn {
        position: relative;
    }

    .btn-switch > .btn > input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        opacity: 0;
        margin: 0;
        padding: 0;
    }
</style>
<template>
    <router-view></router-view>
</template>