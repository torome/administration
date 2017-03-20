<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            next(() => {
                injection.sidebar.active('setting');
            });
        },
    };
</script>
<template>
    <card>
        <p slot="title">导航管理</p>
        <i-form :label-width="100">
            <form-item>
                <i-button type="primary" @click.native="submit">确认提交</i-button>
            </form-item>
        </i-form>
    </card>
</template>
