<script>
    export default {
        methods: {
            onSubmit: function () {
            }
        }
    };
</script>
<template>
    <div class="box box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">开发工具</h3>
        </div>
        <validator name="validation">
            <form class="form-horizontal" novalidate @submit="onSubmit">
                <div class="box-body">
                    <div class="form-group">
                        <label for="site-enabled" class="col-sm-2 control-label">DEBUG 模式</label>
                        <div class="col-sm-10" id="site-enabled">
                            <label class="checkbox-inline"><input type="checkbox" v-model="enableDebug">启用</label>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary pull-right" :class="{ disabled: $validation.invalid }" :disabled="$validation.invalid">保存</button>
                </div>
            </form>
        </validator>
    </div>
</template>