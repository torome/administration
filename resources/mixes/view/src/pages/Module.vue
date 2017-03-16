<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        key: 'name',
                        title: '模块名称',
                        width: 200,
                    },
                    {
                        key: 'author',
                        title: '作者',
                        width: 200,
                    },
                    {
                        key: 'description',
                        title: '描述',
                    },
                    {
                        key: 'handle',
                        render(row, column, index) {
                            return `<i-switch v-model="list[${index}].enabled" @on-change="statusChanged(${index})"></i-switch>`;
                        },
                        title: '操作',
                        width: 200,
                    },
                ],
                list: [
                    {
                        author: 'Notadd <notadd@ibenchu.com>',
                        enabled: true,
                        description: 'Notadd 内容管理模块',
                        name: '文章CMS',
                    },
                ],
                self: this,
            };
        },
        methods: {
            statusChanged(index) {
                const self = this;
                console.log(self.list[index]);
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">模块配置</p>
        <i-table :columns="columns" :content="self" :data="list" :show-header="false"></i-table>
    </card>
</template>
