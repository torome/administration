<script>
  export default {
    data() {
      return {
        form: {
          password: '',
          username: '',
        },
      };
    },
    methods: {
      submit() {
        console.log('Submit!');
      },
    },
  };
</script>
<template>
    <div class="login-layout">
        <i-form :model="form" :label-width="100">
            <form-item label="账号">
                <i-input v-model="form.username" placeholder="请输入账号"></i-input>
            </form-item>
            <form-item label="密码">
                <i-input v-model="form.username" placeholder="请输入密码"></i-input>
            </form-item>
            <form-item>
                <i-button type="primary" @click.native="submit">确认提交</i-button>
            </form-item>
        </i-form>
    </div>
</template>
