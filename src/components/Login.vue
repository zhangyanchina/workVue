<template>
  <div class="login_container">
    <div class="title">
      <img src="../assets/images/title.png" title="香洲區財政綜合業務平臺">
    </div>
    <div class="login_box">
      <h3 class="box_title">用户登录</h3>
      <el-form :model="userForm" :rules="userRules" ref="userForm">
        <el-form-item prop="username">
          <el-input type="text" :v-model="userForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" :v-model="userForm.password" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginMix from "./loginmix";
export default {
  mixins: [loginMix]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login_container {
  height: 100%;
  background: url("../assets/images/back_xz.jpg") no-repeat;
  background-size: cover;
  background-position-x: -680px;
  > .title {
    cursor: pointer;
    padding-top: 30px;
    padding-left: 5%;
  }
  > .login_box {
    width: 420px;
    height: 380px;
    margin: 0 auto;
    background: url("../assets/images/whitecard.png") no-repeat 100% 100%;
    background-size: cover;
    margin-top: 12%;
    > .box_title {
      font-size: 24px;
      color: #fff;
      text-align: center;
      height: 70px;
      line-height: 70px;
    }
    .box_input {
      position: relative;
      width: 75%;
      margin: 14px auto;
      top: 50px;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 17px;
        z-index: 2;
      }
    }
  }
}
.el-form-item {
  background: #072376;
}
.el-input__inner {
  width: 100%;
  height: 43px;
  background: #072376;
  border: 1px solid #0177dc;
  border-radius: 6px;
  padding-left: 50px;
  color: #fff;
}
.el-input__inner:focus {
  border: 1px solid #fff;
}
::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #fff;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
}
</style>
