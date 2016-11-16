<script>
    export default {
        data: () => {
            return {
                uri: "www.example.com"
            };
        },
        events: {
            submit: function () {
                console.log("submit");
            }
        }
    };
</script>
<template>
    <validator name="validation">
        <div class="form-group" :class="{ 'has-error': $validation.uri.invalid }">
            <label for="uri" class="col-sm-2 control-label">CDN 地址</label>
            <div class="col-sm-10">
                <input v-model="uri" id="uri" type="text" class="form-control" placeholder="请输入 CDN 地址" v-validate:uri="{ required: { rule: true, message: 'CDN 地址不能为空' } }">
                <span v-if="$validation.uri.required" class="help-block">{{ $validation.uri.required }}</span>
            </div>
        </div>
    </validator>
</template>