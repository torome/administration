<script>
    let checkAll = false;
    export default {
        data: () => {
            return {
                rules: []
            };
        },
        methods: {
            onSubmit: function () {
            }
        },
        computed: {
            checkAll: {
                set: function (value) {
                    for (let rule of this.rules) {
                        rule.enable = value;
                    }
                    checkAll = value;
                    return checkAll;
                },
                get: function () {
                    for (let rule of this.rules) {
                        if (!rule.enable) return false;
                    }
                    return true;
                }
            }
        }
    };
</script>
<style>
    .table > thead > tr > th,
    .table > tbody > tr > th,
    .table > tfoot > tr > th,
    .table > thead > tr > td,
    .table > tbody > tr > td,
    .table > tfoot > tr > td {
        white-space: nowrap;
    }
    .table > thead > tr.top > th,
    .table > tbody > tr.top > th,
    .table > tfoot > tr.top > th,
    .table > thead > tr.top > td,
    .table > tbody > tr.top > td,
    .table > tfoot > tr.top > td {
        border-top-color: transparent;
    }
    table input[type=text] {
        border: none;
        width: 100%;
        background-color: transparent;
    }
    table input[type=text].error {
        outline: 1px dashed #cb2027;
    }
</style>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">伪静态设置</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <table class="table table-striped">
                        <tr class="top">
                            <th style="width: 1%">页面</th>
                            <th style="width: 1%">可用参数</th>
                            <th>格式</th>
                            <th style="width: 1%; text-align: right">
                                <input type="checkbox" v-model="checkAll">
                            </th>
                        </tr>
                        <tr v-for="rule in rules">
                            <td>{{ rule.page }}</td>
                            <td>
                                <template v-for="argument in rule.arguments">
                                    <code>{{ argument }}</code>{{"&nbsp;"}}
                                </template>
                            </td>
                            <td>
                                <input type="text" v-model="rule.format" :class="{ 'error': ($validation['format' + $index] === undefined ? false : $validation['format' + $index].invalid) }" :field="'format' + $index" v-validate="{ required: { rule: true, message: '附件大小不能为空' } }">
                            </td>
                            <td>
                                <input type="checkbox" v-model="rule.enable">
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="box-footer">
                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-3">
                            <button type="submit" class="btn btn-primary btn-flat" :class="{ disabled: $validation.invalid }" :disabled="$validation.invalid">保存</button>
                        </div>
                    </div>
                </div>
            </form>
        </validator>
    </div>
</template>