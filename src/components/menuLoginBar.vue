<template>
  <el-dropdown style="float: right">
    <div>
      <router-link v-if="!getLoginStatus()" to="/" style="color: white"
        >登录</router-link
      >
      <i
        v-if="getLoginStatus()"
        class="el-icon-user-solid"
        style="color: transparent"
      >
        <el-dropdown-menu>
          <el-dropdown-item>
            <span
              ><router-link to="/index/info-center">个人中心</router-link></span
            >
          </el-dropdown-item>
          <el-dropdown-item>
            <span><router-link to="/">退出登录</router-link></span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </i>
    </div>
  </el-dropdown>
</template>

<script>
import storageUtil from "../utils/storageUtil";

export default {
  name: "menuLoginBar",
  data() {
    return {
      msg: this.getLoginStatus(),
    };
  },
  methods: {
    getLoginStatus() {
      if (!window.localStorage) {
        alert("浏览器不支持localstorage。请更换更高版本的浏览器");
        return false;
      } else return storageUtil.get("isLogin") != null;
    },
  },
};
</script>

<style>
.el-icon-user-solid {
  width: 24px;
  height: 24px;
  background: url("../assets/avatar.png") no-repeat center center;
  background-size: contain;
}

.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
  color: #545c64;
}
</style>