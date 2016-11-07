<script>
    import $ from "jquery";
    export default {
        ready: function () {
            $(() => {
                $.AdminLTE.layout.activate();
            });
        }
    };
</script>
<template>
    <div class="content-wrapper">
        <section class="content"><slot></slot></section>
    </div>
</template>