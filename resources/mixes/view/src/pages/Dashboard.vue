<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.sidebar.active('setting');
            next();
        },
    };
</script>
<template></template>
