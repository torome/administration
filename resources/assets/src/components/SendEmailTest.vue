<script>
    export default {
        data: () => {
            return {
                recipients: [],
                subject: "demo",
                content: "content"
            };
        },
        ready: function () {
            this.$http.get("send-mail-test.json").then((response) => {
                this.$data = response.body;
            });
        },
        methods: {
            onSubmit: function () {
            },
            onRemove: function (index) {
                this.recipients.splice(index, 1);
            },
            onAdd: function () {
                let value = this.$els.testMail.value;
                this.recipients.push(value);
            }
        }
    };
</script>
<style>
    .table > thead > tr.top > th,
    .table > tbody > tr.top > th,
    .table > tfoot > tr.top > th,
    .table > thead > tr.top > td,
    .table > tbody > tr.top > td,
    .table > tfoot > tr.top > td {
        border-top-color: transparent;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">邮件发送测试</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group" :class="{ 'has-error': $validation.subject.invalid }">
                        <label for="host" class="col-sm-2 control-label">主题</label>
                        <div class="col-sm-10">
                            <input v-model="subject" id="host" type="text" class="form-control" placeholder="请输入主机地址"
                                   v-validate:subject="{ required: { rule: true, message: '主机地址不能为空' } }">
                            <span v-if="$validation.subject.required"
                                  class="help-block">{{ $validation.subject.required }}</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'has-error': $validation.content.invalid }">
                        <label for="content" class="col-sm-2 control-label">内容</label>
                        <div class="col-sm-10">
                        <textarea class="form-control" id="content" rows="10" placeholder="请输入邮箱名称" v-model="content"
                                  v-validate:content="{ required: { rule: true, message: '邮箱名称不能为空' } }"></textarea>
                            <span v-if="$validation.content.required"
                                  class="help-block">{{ $validation.content.required }}</span>
                        </div>
                    </div>
                </div>
            </form>
            <hr>
            <div class="box-body">
                <div class="form-group">
                    <table class="table table-striped">
                        <tr class="top">
                            <th style="width: 1%"></th>
                            <th>邮箱</th>
                            <th style="width: 1%">状态</th>
                        </tr>
                        <tr v-for="recipient in recipients" track-by="$index">
                            <td>
                                <button type="button" class="close" aria-label="Close" @click="onRemove($index)"><span
                                        class="text-danger" aria-hidden="true">&times;</span></button>
                            </td>
                            <td>{{ recipient }}</td>
                            <td><span class="label label-primary">待测试</span></td>
                        </tr>
                    </table>
                </div>
                <div class="form-group">
                    <label for="test-mail">添加测试邮箱</label>
                    <div class="input-group">
                        <input id="test-mail" type="text" class="form-control" placeholder="请输入测试邮箱" v-el:test-mail
                               v-validate:test-mail="{ required: { rule: true, message: '测试邮箱名称不能为空' } }">
                        <span class="input-group-btn"><button class="btn btn-success" type="button"
                                                              :disabled="$validation.testMail.invalid" @click="onAdd"><span
                                class="glyphicon glyphicon-plus" aria-hidden="true"></span></button></span>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right" :disabled="recipients.length == 0">开始测试</button>
            </div>
        </validator>
    </div>
</template>