<template>
  <div id="login-page">
    <img class="logo" alt="My logo" src="../assets/logo.png" />
    <h2>欢迎登录本平台</h2>
    <div class="account">
      <span>账号：</span>
      <el-input
        v-model="form.username"
        placeholder="请输入手机号或邮箱"
        class="myInput"
      ></el-input>
    </div>
    <div class="psw">
      <span>密码：</span>
      <el-input
        @keyup.enter.native="submitForm(form)"
        v-model="form.password"
        placeholder="请输入密码"
        show-password
        class="myInput"
      ></el-input>
    </div>
    <div class="login">
      <el-button @click="submitForm(form)">登录</el-button>
    </div>
  </div>
</template>

<script>
import storageUtil from "@/utils/storageUtil";

export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm(form) {
      let flag = false;
      if (form.username === "admin") {
        flag = form.password === "123456";
      } else {
        flag = false;
      }
      if (flag) {
        storageUtil.set("isLogin", true, 30);
        this.$router.push("/index"); // 跳转到首页
        this.$message({
          message: "登录成功",
          type: "success",
        });
      } else {
        this.$message({
          message: "账号或密码错误",
          type: "error",
        });
      }
    },
  },
};
</script>

<style lang="scss">
#login-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#login-page .logo {
  margin: 20px 0px 10px;
}

#login-page .account,
#login-page .psw {
  width: 400px;
  margin: 10px auto;
}
#login-page .myInput {
  width: 300px;
  height: 50px;
}
</style>
