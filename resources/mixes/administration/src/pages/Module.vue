<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/administration/module`).then(response => {
                next(vm => {
                    injection.loading.finish();
                    injection.sidebar.active('setting');
                    const all = response.data.data.all;
                    const enabled = response.data.data.enabled;
                    const installed = response.data.data.installed;
                    const notInstalled = response.data.data.notInstall;
                    vm.list.all = Object.keys(all).map(key => all[key]);
                    vm.list.enabled = Object.keys(enabled).map(key => enabled[key]);
                    vm.list.installed = Object.keys(installed).map(key => {
                        const data = installed[key];
                        data.loading = false;
                        return data;
                    });
                    vm.list.notInstalled = Object.keys(notInstalled).map(key => {
                        const data = notInstalled[key];
                        data.loading = false;
                        return data;
                    });
                });
            });
        },
        data() {
            return {
                columns: {
                    installed: [
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
                            key: 'status',
                            render(row, column, index) {
                                return `<i-switch v-model="list.installed[${index}].enabled" @on-change="statusChanged(${index})"></i-switch>`;
                            },
                            title: '状态',
                            width: 200,
                        },
                        {
                            key: 'handle',
                            render(row, column, index) {
                                return `<i-button :loading="list.installed[${index}].loading" type="error" @click="uninstall(${index})">卸载</i-button>`;
                            },
                            title: '操作',
                            width: 200,
                        },
                    ],
                    notInstalled: [
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
                                return `<i-button :loading="list.notInstalled[${index}].loading" type="primary" @click="install(${index})">安装</i-button>`;
                            },
                            title: '操作',
                            width: 200,
                        },
                    ],
                },
                list: {
                    all: [],
                    enabled: [],
                    installed: [],
                    notInstalled: [],
                },
                self: this,
            };
        },
        methods: {
            install(index) {
                const self = this;
                const item = self.list.notInstalled[index];
                item.loading = true;
                injection.http.post(`${window.api}/module/install`, {
                    identification: item.identification,
                }).then(response => {
                    const messages = response.data.message;
                    messages.forEach(message => {
                        self.$notice.open({
                            title: message,
                        });
                    });
                    self.$notice.open({
                        title: '正在刷新数据……',
                    });
                    injection.loading.start();
                    injection.http.post(`${window.api}/administration/module`).then(result => {
                        injection.loading.finish();
                        injection.sidebar.active('setting');
                        const all = result.data.data.all;
                        const enabled = result.data.data.enabled;
                        const installed = result.data.data.installed;
                        const notInstalled = result.data.data.notInstall;
                        self.$nextTick(() => {
                            self.list.all = Object.keys(all).map(key => all[key]);
                            self.list.enabled = Object.keys(enabled).map(key => enabled[key]);
                            self.list.installed = Object.keys(installed).map(key => {
                                const data = installed[key];
                                data.loading = false;
                                return data;
                            });
                            self.list.notInstalled = Object.keys(notInstalled).map(key => {
                                const data = notInstalled[key];
                                data.loading = false;
                                return data;
                            });
                            self.$notice.open({
                                title: '刷新数据完成！',
                            });
                        });
                    });
                }).finally(() => {
                    item.loading = false;
                });
            },
            statusChanged(index) {
                const self = this;
                injection.loading.start();
                const module = self.list.installed[index];
                injection.http.post(`${window.api}/module/enable`, {
                    name: module.identification,
                    value: module.enabled,
                }).then(() => {
                    injection.loading.finish();
                    injection.notice.open({
                        title: module.enabled ? `开启模块${module.name}成功！` : `关闭模块${module.name}成功！`,
                    });
                    injection.notice.warning({
                        title: '将在3秒后重载网页！',
                    });
                    window.setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                });
            },
            uninstall(index) {
                const self = this;
                const module = self.list.installed[index];
                module.loading = true;
                if (module.enabled) {
                    self.$notice.error({
                        title: `必须先关闭模块${module.name}，才能卸载！`,
                    });
                    module.loading = false;
                } else {
                    injection.http.post(`${window.api}/module/uninstall`, {
                        identification: module.identification,
                    }).then(response => {
                        const messages = response.data.message;
                        messages.forEach(message => {
                            self.$notice.open({
                                title: message,
                            });
                        });
                        self.$notice.open({
                            title: '正在刷新数据……',
                        });
                        injection.loading.start();
                        injection.http.post(`${window.api}/administration/module`).then(result => {
                            injection.loading.finish();
                            injection.sidebar.active('setting');
                            const all = result.data.data.all;
                            const enabled = result.data.data.enabled;
                            const installed = result.data.data.installed;
                            const notInstalled = result.data.data.notInstall;
                            self.$nextTick(() => {
                                self.list.all = Object.keys(all).map(key => all[key]);
                                self.list.enabled = Object.keys(enabled).map(key => enabled[key]);
                                self.list.installed = Object.keys(installed).map(key => {
                                    const data = installed[key];
                                    data.loading = false;
                                    return data;
                                });
                                self.list.notInstalled = Object.keys(notInstalled).map(key => {
                                    const data = notInstalled[key];
                                    data.loading = false;
                                    return data;
                                });
                                self.$notice.open({
                                    title: '刷新数据完成！',
                                });
                            });
                        });
                    }).finally(() => {
                        module.loading = false;
                    });
                }
            },
        },
    };
</script>
<template>
    <div class="module-wrap">
        <card>
            <tabs value="installed">
                <tab-pane label="开启模块" name="installed">
                    <i-table :columns="columns.installed" :content="self" :data="list.installed"></i-table>
                </tab-pane>
                <tab-pane label="本地安装" name="no-installed">
                    <i-table :columns="columns.notInstalled" :content="self" :data="list.notInstalled"></i-table>
                </tab-pane>
            </tabs>
        </card>
    </div>
</template>
