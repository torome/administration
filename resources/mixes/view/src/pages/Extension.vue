<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        key: 'name',
                        title: '插件名称',
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
                        description: '百度搜索插件',
                        name: '百度搜索',
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
        <p slot="title">插件管理</p>
        <i-table :columns="columns" :content="self" :data="list" :show-header="false"></i-table>
    </card>
</template>
