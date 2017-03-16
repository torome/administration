<script>
    import state from '../states/seo';

    export default {
        computed: {
            ...state,
        },
    };
</script>
<template>
    <card>
        <p slot="title">全局 SEO 配置</p>
        <i-form :label-width="100">
            <form-item label="标题">
                <i-col span="9">
                    <i-input placeholder="请输入标题" v-model="description" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                </i-col>
            </form-item>
            <form-item label="描述">
                <i-col span="9">
                    <i-input type="textarea" placeholder="请输入描述" v-model="keyword" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                </i-col>
            </form-item>
            <form-item label="关键字">
                <i-col span="9">
                    <i-input type="textarea" placeholder="请输入关键字" v-model="description" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                </i-col>
            </form-item>
            <form-item>
                <i-button type="primary" @click.native="submit">确认提交</i-button>
            </form-item>
        </i-form>
    </card>
</template>
