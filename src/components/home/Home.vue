<template>
  <div class="home_container">
    <el-container style="height:100%">
      <el-header style="height:64px">
        <div class="user_box" @mouseenter="enterFlag=true" @mouseleave="enterFlag=false">
          <img src="../../assets/images/head.png">
          <el-card class="box-card" v-show="enterFlag" shadow="hover">
            <div class="items">用户：{{username}}</div>
            <div class="items">角色：{{power}}</div>
            <el-button type="info" style="width:100%" @click="Logout">退出</el-button>
          </el-card>
        </div>
      </el-header>
      <el-container style="height:100%;">
        <el-aside width="200px" style="height:100%;background-color: rgb(84, 92, 100)">
          <el-menu
            :router="true"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item :index="items.id" v-for="(items,index) in menuList" :key="items.id">
              <i :class="listIcon[index]"></i>
              <span slot="title">{{items.title}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import homeMix from "./homemix.js";
export default {
  mixins: [homeMix]
};
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
  .el-header {
    background: url("../../assets/images/nav.png") no-repeat;
    position: relative;
    > .user_box {
      position: absolute;
      right: 10%;
      > img {
        cursor: pointer;
      }
      > .box-card {
        position: absolute;
        top: 62px;
        left: -93%;
        width: 200px;
        .items {
          cursor: default;
          // 文字不能被选中
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          text-align: center;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
