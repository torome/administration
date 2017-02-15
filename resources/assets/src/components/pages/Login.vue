<script>
  export default {
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      submit: function (e) {
        let _this = this
        _this.$validator.validateAll()
        if (_this.errors.any()) {
          _this.$jquery(_this.$el).find('input[name=username]').each(function (key, item) {
            _this.$jquery(item).focus()
          })
          return false
        }
        _this.$jquery(e.target).prop('disabled', true)
        _this.$jquery(e.target).text('登陆中...')
        _this.$http.post(window.admin + '/token', {
          name: _this.username,
          password: _this.password
        }).then(function (response) {
          if (response.body.access_token && response.body.status === 'success') {
            _this.$jquery(e.target).prop('disabled', false)
            _this.$jquery(e.target).text('登陆成功！正在跳转...')
            _this.$store.commit('token', response.body)
            _this.$router.push('/')
          } else {
            _this.$jquery(e.target).prop('disabled', false)
            _this.$jquery(e.target).text('登陆失败！请检查账号或密码后重试')
            setTimeout(function () {
              _this.$jquery(e.target).text('登陆')
            }, 1000)
          }
        }, function (response) {
          _this.$jquery(e.target).prop('disabled', false)
          _this.$jquery(e.target).text('登陆')
          window.alert('请求失败！')
        })
      }
    },
    mounted () {
      let _this = this
      _this.$jquery(_this.$el).css({
        width: _this.$jquery(window).width(),
        height: _this.$jquery(window).height()
      })
      _this.$store.commit('title', '登陆 - Notadd Administration')
    }
  }
</script>
<style scoped>
    .login-page {
        background: transparent;
    }

    .login-bg {
        background-color: #003a6f;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        overflow: hidden;
        bottom: 0;
    }

    .bg-box {
        width: 2000px;
        height: 100%;
    }

    .cylinder.orange1 {
        height: 130px;
        width: 3.75%;
        background-color: #ff5959;
        position: absolute;
        left: 8%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: 0;
    }

    .cylinder.orange1:before {
        content: '';
        height: 72px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -36px;
        left: 0;
        background-color: #ff5959;
        box-shadow: 0 0 2px 0 #ff5959;
    }

    .cylinder.orange2 {
        height: 100px;
        width: 200px;
        background-color: #ff5959;
        border-radius: 200px 200px 0 0;
        position: absolute;
        left: 33%;
        bottom: -20px;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: -100;
    }

    .cylinder.orange3 {
        height: 440px;
        width: 2.6%;
        background-color: #ff5959;
        position: absolute;
        left: 54%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: -100;
    }

    .cylinder.orange3:before {
        content: '';
        height: 50px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -25px;
        left: 0;
        background-color: #ff5959;
        box-shadow: 0 0 2px 0 #ff5959;
    }

    .cylinder.orange4 {
        height: 318px;
        width: 2.6%;
        background-color: #ff5959;
        position: absolute;
        left: 70%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: -100;
    }

    .cylinder.orange4:before {
        content: '';
        height: 50px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -28px;
        left: 0;
        background-color: #ff5959;
        box-shadow: 0 0 2px 0 #ff5959;
    }

    .cylinder.yellow1 {
        height: 56px;
        width: 4.17%;
        background-color: #ffc56c;
        position: absolute;
        left: 19%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ffc56c;
        z-index: -100;
    }

    .cylinder.yellow1:before {
        content: '';
        height: 80px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -42px;
        left: 0;
        background-color: #ffc56c;
        box-shadow: 0 0 2px 0 #ffc56c;
    }

    .cylinder.yellow2 {
        height: 88px;
        width: 6.67%;
        background-color: #ffc56c;
        position: absolute;
        left: 58%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ffc56c;
        z-index: -100;
    }

    .cylinder.yellow2:before {
        content: '';
        height: 128px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -66px;
        left: 0;
        background-color: #ffc56c;
        box-shadow: 0 0 2px 0 #ffc56c;
    }

    .cylinder.yellow3 {
        height: 390px;
        width: 11.9%;
        background-color: #ffc56c;
        position: absolute;
        left: 75%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ffc56c;
        z-index: -100;
    }

    .cylinder.yellow3:before {
        content: '';
        height: 228px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -116px;
        left: 0;
        background-color: #ffc56c;
        box-shadow: 0 0 2px 0 #ffc56c;
    }

    .cylinder.white1 {
        height: 70px;
        width: 2.6%;
        background-color: #fff;
        position: absolute;
        left: 28.2%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #fff;
        z-index: -100;
    }

    .cylinder.white1:before {
        content: '';
        height: 50px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -26px;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px 0 #fff;
    }

    .cylinder.white2 {
        height: 290px;
        width: 3.75%;
        background-color: #fff;
        position: absolute;
        left: 47.6%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #fff;
        z-index: -100;
    }

    .cylinder.white2:before {
        content: '';
        height: 72px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -118px;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px 0 #fff;
    }

    .cylinder.white3 {
        height: 40px;
        width: 2.6%;
        background-color: #fff;
        position: absolute;
        left: 87.5%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #fff;
        z-index: -100;
    }

    .cylinder.white3:before {
        content: '';
        height: 50px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -26px;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px 0 #fff;
    }

    .cylinder.blue1 {
        width: 3.96%;
        height: 370px;
        background-color: #205381;
        position: absolute;
        left: 0;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue1:before {
        content: '';
        height: 76px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -40px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue2 {
        height: 100px;
        width: 200px;
        background-color: #205381;
        border-radius: 200px 200px 0 0;
        position: absolute;
        left: 6.7%;
        bottom: -20px;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue3 {
        width: 11.67%;
        height: 520px;
        background-color: #205381;
        position: absolute;
        left: 24.7%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue3:before {
        content: '';
        height: 224px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -114px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue4 {
        width: 3.6%;
        height: 200px;
        background-color: #205381;
        position: absolute;
        left: 38.6%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue4:before {
        content: '';
        height: 50px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -26px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue5 {
        position: absolute;
        width: 6.67%;
        height: 360px;
        left: 44.4%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue5:before {
        content: '';
        height: 128px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -66px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue6 {
        position: absolute;
        width: 2.6%;
        height: 846px;
        left: 53.6%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue6:before {
        content: '';
        height: 50px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -26px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue7 {
        position: absolute;
        width: 3.75%;
        height: 380px;
        left: 58.75%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue7:before {
        content: '';
        height: 72px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -118px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue8 {
        position: absolute;
        width: 12.5%;
        height: 116px;
        left: 65%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue8:before {
        content: '';
        height: 240px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -122px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue9 {
        position: absolute;
        width: 3.75%;
        height: 520px;
        left: 79.2%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue9:before {
        content: '';
        height: 72px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -118px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue10 {
        position: absolute;
        width: 2.6%;
        height: 200px;
        left: 85.9%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue10:before {
        content: '';
        height: 50px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -26px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue11 {
        position: absolute;
        width: 4.69%;
        height: 740px;
        left: 91.4%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue11:before {
        content: '';
        height: 90px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -46px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue12 {
        position: absolute;
        width: 1.46%;
        height: 40px;
        left: 98.5%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue12:before {
        content: '';
        height: 28px;
        width: 100%;
        border-top-left-radius: 100%;
        position: absolute;
        top: -28px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs1 {
        width: 10%;
        height: 240px;
        background-color: #205381;
        position: absolute;
        left: 0;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs1:before {
        content: '';
        height: 38px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -18.75px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs2 {
        width: 8%;
        height: 590px;
        background-color: #205381;
        position: absolute;
        left: 40%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs2:before {
        content: '';
        height: 30px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -15px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs3 {
        position: absolute;
        width: 12%;
        height: 140px;
        left: 22%;
        background-color: #ffc56c;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ffc56c;
        z-index: -100;
    }

    .cylinder-xs.bluexs3:before {
        content: '';
        height: 45px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -22.5px;
        left: 0;
        background-color: #ffc56c;
        box-shadow: 0 0 2px 0 #ffc56c;
        z-index: -100;
    }

    .cylinder-xs.bluexs4 {
        position: absolute;
        width: 28%;
        height: 70px;
        left: 62%;
        background-color: #ff5959;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: -100;
    }

    .cylinder-xs.bluexs4:before {
        content: '';
        height: 105px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -52.5px;
        left: 0;
        background-color: #ff5959;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: -100;
    }

    .cylinder-xs.bluexs5 {
        width: 9.2%;
        height: 130px;
        background-color: #205381;
        position: absolute;
        left: 78%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs5:before {
        content: '';
        height: 35px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -17.25px;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs6 {
        position: absolute;
        width: 6.8%;
        height: 50px;
        left: 6%;
        background-color: #fff;
        bottom: 0;
        box-shadow: 0 0 2px 0 #fff;
        z-index: -100;
    }

    .cylinder-xs.bluexs6:before {
        content: '';
        height: 26px;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -12.75px;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px 0 #fff;
        z-index: -100;
    }

    .login-win {
        max-width: 520px;
        height: 410px;
        margin: 200px auto;
        background-color: #fff;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        padding: 40px;
    }

    .login-win h3 {
        margin: 0 0 46px 0;
        font-size: 18px;
        color: #666;
        line-height: 18px;
    }

    .login-win input {
        padding-left: 10px;
        width: 100%;
        font-size: 18px;
        color: #666;
        border: none;
        border-bottom: 2px solid #e6e6e6;
        height: 60px;
        padding-top: 20px;
        margin-bottom: 16px;
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }

    .login-win input:focus {
        border-color: #66afe9;
        outline: 0;
    }

    .login-win input::-webkit-input-placeholder {
        font-size: 18px;
        color: #ccc;
    }

    .login-win input:-moz-placeholder {
        font-size: 18px;
        color: #ccc;
    }

    .login-win input::-moz-placeholder {
        font-size: 18px;
        color: #ccc;
    }

    .login-win input:-ms-input-placeholder {
        font-size: 18px;
        color: #ccc;
    }

    .login-comfirm {
        margin-top: 64px;
        height: 50px;
    }

    .btn-login {
        height: 50px;
        background-color: #3498d8;
        border: none;
        float: right;
        color: #fff;
        padding-left: 40px;
        padding-right: 40px;
    }

    .btn-login:hover {
        background-color: #2f87c2;
        color: #fff;
    }

    .btn-login:focus {
        background-color: #2f87c2;
        color: #fff;
    }

    @media (max-width: 767px) {
        .login-win {
            margin: 80px auto;
        }

        .btn-login {
            width: 120px;
        }

        .cylinder {
            display: none;
        }
    }

    .has-error {
        position: relative;
    }

    .has-error > input {
        border-color: #a00;
    }

    .has-error > .help-block {
        height: 38px;
        line-height: 38px;
        margin: 0;
        position: absolute;
        right: 0;
        top: 20px;
    }

</style>
<template>
    <div class="login-page">
        <div class="login-bg clearfix">
            <div class="bg-box">
                <div class="cylinder orange1"></div>
                <div class="cylinder orange2 hidden-sm hidden-xs"></div>
                <div class="cylinder orange3"></div>
                <div class="cylinder orange4 hidden-sm"></div>
                <div class="cylinder yellow1"></div>
                <div class="cylinder yellow2 hidden-xs"></div>
                <div class="cylinder yellow3"></div>
                <div class="cylinder white1 hidden-sm"></div>
                <div class="cylinder white2"></div>
                <div class="cylinder white3 hidden-sm"></div>
                <div class="cylinder blue1"></div>
                <div class="cylinder blue2 hidden-sm hidden-xs"></div>
                <div class="cylinder blue3"></div>
                <div class="cylinder blue4 hidden-xs"></div>
                <div class="cylinder blue5 hidden-sm"></div>
                <div class="cylinder blue6"></div>
                <div class="cylinder blue7"></div>
                <div class="cylinder blue8 hidden-xs"></div>
                <div class="cylinder blue9"></div>
                <div class="cylinder blue10"></div>
                <div class="cylinder blue11"></div>
                <div class="cylinder blue12"></div>
                <div class="cylinder-xs bluexs1 visible-xs"></div>
                <div class="cylinder-xs bluexs2 visible-xs"></div>
                <div class="cylinder-xs bluexs3 visible-xs"></div>
                <div class="cylinder-xs bluexs4 visible-xs"></div>
                <div class="cylinder-xs bluexs5 visible-xs"></div>
                <div class="cylinder-xs bluexs6 visible-xs"></div>
            </div>
        </div>
        <div class="container">
            <div class="login-win">
                <h3>Notadd 后台管理</h3>
                <div class="account" :class="{ 'has-error': errors.has('username') }">
                    <label for="login-account" class="sr-only">登录</label>
                    <input name="username" type="text" id="login-account" placeholder="用户名" v-model="username" v-validate data-vv-rules="required">
                    <span class="help-block" v-show="errors.has('username')">必需填写用户名</span>
                </div>
                <div class="psw" :class="{ 'has-error': errors.has('password') }">
                    <label for="login-psw" class="sr-only">密码</label>
                    <input name="password" type="password" id="login-psw" placeholder="密码" v-model="password" v-validate data-vv-rules="required">
                    <span class="help-block" v-show="errors.has('password')">必需填写密码</span>
                </div>
                <div class="login-comfirm">
                    <button class="btn btn-lg btn-login" :disabled="errors.any()" @click="submit">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>