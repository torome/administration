<script>
  export default {
    data() {
      return {};
    },
    methods: {
      submit() {
        console.log('Submit!');
      },
    },
  };
</script>
<template>
    <i-form :label-width="100">
        <form-item label="Debug 模式">
            <i-col span="9">
                <radio-group>
                    <radio :value="true">开启</radio>
                    <radio :value="false">关闭</radio>
                </radio-group>
            </i-col>
        </form-item>
        <form-item>
            <i-button type="primary" @click.native="submit">确认提交</i-button>
        </form-item>
    </i-form>
</template>
