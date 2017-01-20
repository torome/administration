<script>
  export default {
    created () {
    },
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      submit: function (e) {
        this.$validator.validateAll()
        if (this.errors.any()) {
          return false
        }
        this.$http.post(window.url + '/token', {
          name: this.username,
          password: this.password
        }).then(function (response) {
          this.$store.commit('token', response.body)
          this.$router.push('/')
        }, function (response) {
          window.alert('请求失败！')
        })
      }
    },
    mounted () {
      this.$store.commit('title', '登陆 - Notadd Administration')
    }
  }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 20px;
        height: 100%;
    }

    body {
        font-family: "Microsoft YaHei", sans-serif;
        font-size: .7rem;
        color: #666;
        background-color: #003a6f;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    /* front-login */
    .login-bg {
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
        height: 16.5rem;
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
        height: 3.6rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.8rem;
        left: 0;
        background-color: #ff5959;
        box-shadow: 0 0 2px 0 #ff5959;
    }

    .cylinder.orange2 {
        height: 5rem;
        width: 10rem;
        background-color: #ff5959;
        border-radius: 10rem 10rem 0 0;
        position: absolute;
        left: 33%;
        bottom: -1rem;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: -100;
    }

    .cylinder.orange3 {
        height: 22rem;
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
        height: 2.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.25rem;
        left: 0;
        background-color: #ff5959;
        box-shadow: 0 0 2px 0 #ff5959;
    }

    .cylinder.orange4 {
        height: 3.9rem;
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
        height: 2.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.4rem;
        left: 0;
        background-color: #ff5959;
        box-shadow: 0 0 2px 0 #ff5959;
    }

    .cylinder.yellow1 {
        height: 28rem;
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
        height: 4rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -2.1rem;
        left: 0;
        background-color: #ffc56c;
        box-shadow: 0 0 2px 0 #ffc56c;
    }

    .cylinder.yellow2 {
        height: 4.4rem;
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
        height: 6.4rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -3.3rem;
        left: 0;
        background-color: #ffc56c;
        box-shadow: 0 0 2px 0 #ffc56c;
    }

    .cylinder.yellow3 {
        height: 19.5rem;
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
        height: 11.4rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -5.8rem;
        left: 0;
        background-color: #ffc56c;
        box-shadow: 0 0 2px 0 #ffc56c;
    }

    .cylinder.white1 {
        height: 3.5rem;
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
        height: 2.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.3rem;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px 0 #fff;
    }

    .cylinder.white2 {
        height: 14.5rem;
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
        height: 3.6rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.9rem;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px 0 #fff;
    }

    .cylinder.white3 {
        height: 2rem;
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
        height: 2.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.3rem;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px 0 #fff;
    }

    .cylinder.blue1 {
        width: 3.96%;
        height: 18.5rem;
        background-color: #205381;
        position: absolute;
        left: 0;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue1:before {
        content: '';
        height: 3.8rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -2rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue2 {
        height: 5rem;
        width: 10rem;
        background-color: #205381;
        border-radius: 10rem 10rem 0 0;
        position: absolute;
        left: 6.7%;
        bottom: -1rem;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue3 {
        width: 11.67%;
        height: 26rem;
        background-color: #205381;
        position: absolute;
        left: 24.7%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue3:before {
        content: '';
        height: 11.2rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -5.7rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue4 {
        width: 3.6%;
        height: 10rem;
        background-color: #205381;
        position: absolute;
        left: 38.6%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue4:before {
        content: '';
        height: 2.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.3rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue5 {
        position: absolute;
        width: 6.67%;
        height: 18rem;
        left: 44.4%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue5:before {
        content: '';
        height: 6.4rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -3.3rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue6 {
        position: absolute;
        width: 2.6%;
        height: 42.3rem;
        left: 53.6%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue6:before {
        content: '';
        height: 2.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.3rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue7 {
        position: absolute;
        width: 3.75%;
        height: 19rem;
        left: 58.75%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue7:before {
        content: '';
        height: 3.6rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.9rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue8 {
        position: absolute;
        width: 12.5%;
        height: 5.8rem;
        left: 65%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue8:before {
        content: '';
        height: 12rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -6.1rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue9 {
        position: absolute;
        width: 3.75%;
        height: 26rem;
        left: 79.2%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue9:before {
        content: '';
        height: 3.6rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.9rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue10 {
        position: absolute;
        width: 2.6%;
        height: 10rem;
        left: 85.9%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue10:before {
        content: '';
        height: 2.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.3rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue11 {
        position: absolute;
        width: 4.69%;
        height: 37rem;
        left: 91.4%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue11:before {
        content: '';
        height: 4.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -2.3rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue12 {
        position: absolute;
        width: 1.46%;
        height: 2rem;
        left: 98.5%;
        background-color: #205381;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder.blue12:before {
        content: '';
        height: 1.4rem;
        width: 100%;
        border-top-left-radius: 100%;
        position: absolute;
        top: -1.4rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs1 {
        width: 10%;
        height: 12rem;
        background-color: #205381;
        position: absolute;
        left: 0;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs1:before {
        content: '';
        height: 1.875rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -.9375rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs2 {
        width: 8%;
        height: 29.5rem;
        background-color: #205381;
        position: absolute;
        left: 40%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs2:before {
        content: '';
        height: 1.5rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -.75rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs3 {
        position: absolute;
        width: 12%;
        height: 7rem;
        left: 22%;
        background-color: #ffc56c;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ffc56c;
        z-index: -100;
    }

    .cylinder-xs.bluexs3:before {
        content: '';
        height: 2.25rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -1.125rem;
        left: 0;
        background-color: #ffc56c;
        box-shadow: 0 0 2px 0 #ffc56c;
        z-index: -100;
    }

    .cylinder-xs.bluexs4 {
        position: absolute;
        width: 28%;
        height: 3.5rem;
        left: 62%;
        background-color: #ff5959;
        bottom: 0;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: -100;
    }

    .cylinder-xs.bluexs4:before {
        content: '';
        height: 5.25rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -2.625rem;
        left: 0;
        background-color: #ff5959;
        box-shadow: 0 0 2px 0 #ff5959;
        z-index: -100;
    }

    .cylinder-xs.bluexs5 {
        width: 9.2%;
        height: 6.5rem;
        background-color: #205381;
        position: absolute;
        left: 78%;
        bottom: 0;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs5:before {
        content: '';
        height: 1.725rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -.8625rem;
        left: 0;
        background-color: #205381;
        box-shadow: 0 0 2px 0 #205381;
        z-index: -150;
    }

    .cylinder-xs.bluexs6 {
        position: absolute;
        width: 6.8%;
        height: 2.5rem;
        left: 6%;
        background-color: #fff;
        bottom: 0;
        box-shadow: 0 0 2px 0 #fff;
        z-index: -100;
    }

    .cylinder-xs.bluexs6:before {
        content: '';
        height: 1.275rem;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -.6375rem;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px 0 #fff;
        z-index: -100;
    }

    .login-win {
        max-width: 26rem;
        height: 20.5rem;
        margin: 10rem auto;
        background-color: #fff;
        -webkit-border-radius: .5rem;
        -moz-border-radius: .5rem;
        border-radius: .5rem;
        padding: 2rem;
    }

    .login-win h3 {
        margin: 0 0 2.3rem 0;
        font-size: .9rem;
        color: #666;
        line-height: .9rem;
    }

    .login-win input {
        padding-left: .5rem;
        width: 100%;
        font-size: .9rem;
        color: #666;
        border: none;
        border-bottom: 2px solid #e6e6e6;
        height: 3rem;
        padding-top: 1rem;
        margin-bottom: .8rem;
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }

    .login-win input:focus {
        border-color: #66afe9;
        outline: 0;
        /* -webkit-box-shadow: 0 5px 8px rgba(102, 175, 233, .6);
         box-shadow: 0 5px 8px rgba(102, 175, 233, .6);*/
    }

    .login-win input::-webkit-input-placeholder {
        font-size: .9rem;
        color: #ccc;
    }

    .login-win input:-moz-placeholder {
        font-size: .9rem;
        color: #ccc;
    }

    .login-win input::-moz-placeholder {
        font-size: .9rem;
        color: #ccc;
    }

    .login-win input:-ms-input-placeholder {
        font-size: .9rem;
        color: #ccc;
    }

    .login-comfirm {
        margin-top: 3.2rem;
        height: 2.5rem;
    }

    .forget {
        display: inline-block;
        font-size: .8rem;
        color: #ccc;
        line-height: 2.5rem;
    }

    .forget:hover, .forget:focus {
        text-decoration: none;
    }

    .btn-login {
        width: 8rem;
        height: 2.5rem;
        background-color: #3498d8;
        border: none;
        float: right;
        color: #fff;
    }

    .btn-login:hover {
        background-color: #2f87c2;
        color: #fff;
    }

    .btn-login:focus {
        background-color: #2f87c2;
        color: #fff;
    }

    /*适配移动端*/
    @media (max-width: 767px) {
        .login-win {
            margin: 4rem auto;

        }

        .btn-login {
            width: 6rem;
        }

        .cylinder {
            display: none;
        }
    }


</style>
<template>
    <div>
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
                <h3>Notadd Administration</h3>
                <div class="account ">
                    <label for="login-account" class="sr-only">登录</label>
                    <input name="username" type="text" id="login-account" placeholder="登录" v-model="username" v-validate data-vv-rules="required">
                </div>
                <div class="psw">
                    <label for="login-psw" class="sr-only">密码</label>
                    <input name="password" type="password" id="login-psw" placeholder="密码" v-model="password" v-validate data-vv-rules="required">
                </div>
                <div class="login-comfirm">
                    <button class="btn btn-lg btn-login" :disabled="errors.any()" @click="submit">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>