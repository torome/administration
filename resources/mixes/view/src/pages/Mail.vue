<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/mail/get`).then(response => {
                const data = response.data.data;
                console.log(data);
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
            };
        },
        methods: {
            send() {

            },
            submit() {

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
                            <radio label="mail"> Send Mail 函数 </radio>
                            <radio label="smtp"> SMTP </radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="加密方式" prop="encryption">
                        <radio-group v-model="form.encryption">
                            <radio label="none"> 不加密 </radio>
                            <radio label="ssl"> SSL </radio>
                        </radio-group>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="服务器地址" prop="host">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入服务器地址" v-model="form.host"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="服务器端口" prop="port">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入服务器端口" v-model="form.port"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="发信邮箱地址" prop="from">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入发信邮箱地址" v-model="form.from"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="SMTP账号" prop="username">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入SMTP账号" v-model="form.username"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item label="SMTP密码" prop="password">
                        <i-input :disabled="form.driver !== 'smtp'" placeholder="请输入SMTP密码" v-model="form.password"></i-input>
                    </form-item>
                </i-col>
            </row>
            <row>
                <i-col span="14">
                    <form-item>
                        <i-button type="primary" @click.native="submit">修改配置</i-button>
                        <i-button @click.native="send">发送测试邮件</i-button>
                    </form-item>
                </i-col>
            </row>
        </i-form>
    </card>
</template>
