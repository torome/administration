<script>
  export default {
    computed() {
      return {};
    },
    methods: {
      submit() {
        console.log('Submit');
      },
    },
  };
</script>
<template>
    <i-form :label-width="100">
        <form-item label="站点开启">
            <i-col span="9">
                <radio-group>
                    <radio value="1">开启</radio>
                    <radio value="0">关闭</radio>
                </radio-group>
            </i-col>
        </form-item>
        <form-item label="网站名称">
            <i-col span="9">
                <i-input placeholder="请输入网站名称"></i-input>
            </i-col>
        </form-item>
        <form-item label="网站域名">
            <i-col span="9">
                <i-input placeholder="请输入网站域名"></i-input>
            </i-col>
        </form-item>
        <form-item label="备案信息">
            <i-col span="9">
                <i-input placeholder="请输入备案信息"></i-input>
            </i-col>
        </form-item>
        <form-item label="公司名称">
            <i-col span="9">
                <i-input placeholder="请输入公司名称"></i-input>
            </i-col>
        </form-item>
        <form-item label="版权信息">
            <i-col span="9">
                <i-input placeholder="请输入版权信息"></i-input>
            </i-col>
        </form-item>
        <form-item label="统计代码">
            <i-col span="9">
                <i-input placeholder="请输入统计代码"></i-input>
            </i-col>
        </form-item>
        <form-item>
            <i-button type="primary" @click.native="submit">确认提交</i-button>
        </form-item>
    </i-form>
</template>
