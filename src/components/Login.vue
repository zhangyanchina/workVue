<template>
  <div class="login_container">
    <div class="title">
      <img src="../assets/images/title.png" title="香洲區財政綜合業務平臺">
    </div>
    <div class="login_box">
      <h3 class="box_title">用户登录</h3>
      <el-form :model="userForm" :rules="userRules" ref="userFrom">
        <el-form-item prop="username">
          <img src="../assets/images/user_w.png">
          <el-input v-model="userForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <img src="../assets/images/password_w.png">
          <i class="el-icon-view look" @click="psw=!psw" :style="{color:psw? 'red':'#fff'}"></i>
          <el-input v-model="userForm.password" placeholder="密码" :type="psw? 'text':'password'"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="login">登录</el-button>
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
    position: relative;
    > .box_title {
      font-size: 24px;
      color: #fff;
      text-align: center;
      height: 70px;
      line-height: 70px;
    }
    > .el-form {
      width: 76%;
      margin: 0 auto;
      margin-top: 50px;
      > .el-form-item {
        position: relative;
        img {
          position: absolute;
          z-index: 2;
          top: 50%;
          transform: translateY(-50%);
          left: 20px;
        }
        .look {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          right: 10px;
          cursor: pointer;
        }
      }
    }
    > .el-button {
      width: 76%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 30px;
    }
  }
}
</style>
