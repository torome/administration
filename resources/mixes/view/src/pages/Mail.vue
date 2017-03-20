<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/mail/get`).then(response => {
                const data = response.data.data;
                next(vm => {
                    injection.loading.finish();
                    vm.form.driver = data.driver;
                    vm.form.encryption = data.encryption;
                    vm.form.port = data.port;
                    vm.form.host = data.host;
                    vm.form.from = data.from;
                    vm.form.username = data.username;
                    vm.form.password = data.password;
                });
            });
            injection.sidebar.active('setting');
        },
        data() {
            return {
                form: {
                    driver: 'mail',
                    encryption: 'none',
                    port: '25',
                    host: '',
                    from: '',
                    username: '',
                    password: '',
                },
                loading: false,
                mail: {
                    address: '',
                    content: '这是一封测试邮件！',
                },
                modal: {
                    loading: true,
                    visible: false,
                },
                rules: {
                    address: [
                        {
                            required: true,
                            type: 'email',
                            message: '请输入正确的接收发信邮箱地址',
                            trigger: 'change',
                        },
                    ],
                },
            };
        },
        methods: {
            send() {
                const self = this;
                self.modal.loading = true;
                self.$refs.form.validate(valid => {
                    if (valid) {
                        self.$http.post(`${window.api}/mail/test`, {
                            content: self.mail.content,
                            to: self.mail.address,
                        }).then(() => {
                            self.$notice.open({
                                desc: self.mail.content,
                                title: '发送测试邮件成功！内容如下：',
                            });
                        }).finally(() => {
                            self.modal.loading = true;
                            self.modal.visible = false;
                        });
                    } else {
                        self.modal.loading = false;
                        window.setTimeout(() => {
                            self.modal.loading = true;
                        }, 10);
                    }
                });
            },
            submit() {
                const self = this;
                self.loading = true;
                injection.http.post(`${window.api}/mail`, self.form).then(() => {
                    injection.notice.open({
                        title: '更新邮件配置完成！',
                    });
                }).finally(() => {
                    self.loading = false;
                });
            },
        },
    };
</script>
<template>
    <card>
        <p slot="title">邮件设置</p>
        <i-form :model="form" :label-width="100">
            <row>
                <i-col span="14">
                    <form-item label="发送方式" prop="driver">
                        <radio-group v-model="form.driver">
                            <radio label="mail"> Send Mail 函数</radio>
                            <radio label="smtp"> SMTP</radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="加密方式" prop="encryption">
                        <radio-group v-model="form.encryption">
                            <radio label="none"> 不加密</radio>
                            <radio label="ssl"> SSL</radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="服务器地址" prop="host">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入服务器地址"
                                 v-model="form.host"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="服务器端口" prop="port">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入服务器端口"
                                 v-model="form.port"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="发信邮箱地址" prop="from">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入发信邮箱地址"
                                 v-model="form.from"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="SMTP账号" prop="username">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入SMTP账号"
                                 v-model="form.username"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="SMTP密码" prop="password">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入SMTP密码"
                                 v-model="form.password"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item>
                        <i-button :loading="loading" type="primary" @click.native="submit">
                            <span v-if="!loading">修改配置</span>
                            <span v-else>正在提交…</span>
                        </i-button>
                        <i-button @click.native="modal.visible = true">发送测试邮件</i-button>
                    </form-item>
                </i-col>
            </row>
        </i-form>
        <modal :loading="modal.loading" title="发送测试邮件" :value="modal.visible" @on-cancel="modal.visible = false" @on-ok="send">
            <i-form label-position="left" :model="mail" ref="form" :rules="rules">
                <form-item label="接收邮箱地址" prop="address">
                    <i-input placeholder="请输入接收发信邮箱地址" v-model="mail.address"></i-input>
                </form-item>
            </i-form>
        </modal>
    </card>
</template>
