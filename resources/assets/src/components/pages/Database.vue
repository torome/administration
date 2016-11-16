<script>
    export default {
        data: () => {
            return {
                backupTypeOptions: [
                    {text: "2M 分卷", value: "2m"},
                    {text: "GZIP 压缩", value: "gzip"}
                ],
                backupType: "2m"
            };
        },
        methods: {
            onSubmit: function () {
            }
        }
    };
</script>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">数据库管理</h3>
        </div>
        <validator name="validation">
            <form novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label class="control-label">备份类型</label>
                        <div>
                            <label v-for="option in backupTypeOptions" class="radio-inline">
                                <input type="radio" :value="option.value" v-model="backupType"> {{ option.text }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary btn-flat" :class="{ disabled: $validation.invalid }" :disabled="$validation.invalid">备份</button>
                </div>
                <div class="box-body no-padding">
                    <table class="table">
                        <tr>
                            <th>备份数据</th>
                            <th style="width: 1%"></th>
                            <th style="width: 1%"></th>
                        </tr>
                        <tr>
                            <td>db2012_03_01</td>
                            <td>
                                <button class="btn btn-link btn-xs">删除</button>
                            </td>
                            <td>
                                <button class="btn btn-link btn-xs">下载</button>
                            </td>
                        </tr>
                        <tr>
                            <td>db2012_03_01</td>
                            <td>
                                <button class="btn btn-link btn-xs">删除</button>
                            </td>
                            <td>
                                <button class="btn btn-link btn-xs">下载</button>
                            </td>
                        </tr>
                        <tr>
                            <td>db2012_03_02</td>
                            <td>
                                <button class="btn btn-link btn-xs">删除</button>
                            </td>
                            <td>
                                <button class="btn btn-link btn-xs">下载</button>
                            </td>
                        </tr>
                        <tr>
                            <td>db2012_06_01</td>
                            <td>
                                <button class="btn btn-link btn-xs">删除</button>
                            </td>
                            <td>
                                <button class="btn btn-link btn-xs">下载</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
        </validator>
    </div>
</template>