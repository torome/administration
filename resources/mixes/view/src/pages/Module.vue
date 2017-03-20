<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/administration/module`).then(response => {
                next(vm => {
                    injection.loading.finish();
                    const data = response.data.data;
                    vm.list = Object.keys(data).map(key => data[key]);
                });
            });
            injection.sidebar.active('setting');
        },
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
                list: [],
                self: this,
            };
        },
        methods: {
            statusChanged(index) {
                const self = this;
                injection.loading.start();
                const module = self.list[index];
                injection.http.post(`${window.api}/module/enable`, {
                    name: module.identification,
                    value: module.enabled,
                }).then(() => {
                    injection.loading.finish();
                    injection.notice.open({
                        title: module.enabled ? `开启模块${module.name}成功！` : `关闭模块${module.name}成功！`,
                    });
                    injection.notice.warning({
                        title: '将在5秒后重载网页！',
                    });
                    window.setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                });
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
