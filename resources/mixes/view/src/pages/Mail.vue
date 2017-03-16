<script>
    export default {

    };
</script>
<template>
    <card>
        <p slot="title">邮件设置</p>
        <i-form :label-width="100">
            <form-item>
                <i-button type="primary" @click.native="submit">确认提交</i-button>
            </form-item>
        </i-form>
    </card>
</template>
