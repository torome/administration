<script>
  export default {
    methods: {
      show: function () {
        this.$store.commit('message', {
          show: true,
          type: 'success',
          text: '这是一个成功消息'
        })
      }
    }
  }
</script>
<style></style>
<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">全局设置</h3>
            <span @click="show">显示信息</span>
        </div>
    </div>
</template>