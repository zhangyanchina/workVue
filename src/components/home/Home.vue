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
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main></el-main>
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
