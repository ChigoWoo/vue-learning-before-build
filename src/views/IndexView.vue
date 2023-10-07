<template>
  <div id="index">
    <el-menu
      :default-active="$route.path"
      router
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#42b983"
    >
      <el-menu-item class="menuItem" index="/index/home">Home</el-menu-item>
      <el-menu-item class="menuItem" index="/index/about">About</el-menu-item>
      <el-submenu index="/index/intro-view">
        <template v-slot:title>IntroView</template>
        <el-menu-item class="menuItem" index="/index/intro-view/router-nest"
          >router nest</el-menu-item
        >
        <el-menu-item class="menuItem" index="/index/intro-view/router-nest2"
          >router nest2</el-menu-item
        >
      </el-submenu>
      <el-menu-item style="float: right">
        <menuLoginBar></menuLoginBar>
      </el-menu-item>
    </el-menu>
    <!-- <nav>
      <router-link to="/index/home">Home</router-link> |
      <router-link to="/index/about">About</router-link> |
      <router-link to="/index/intro-view">IntroView</router-link>
    </nav> -->
    <router-view />
    <div>My name is Chigo! (new content of IndexView.vue)</div>
  </div>
</template>

<script>
import menuLoginBar from "@/components/menuLoginBar.vue";

export default {
  name: "IndexView",
  components: { menuLoginBar },
};
</script>

<style lang="scss">
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.el-menu {
  font-weight: bold;
  margin-bottom: 20px !important;
}

.menuItem {
  float: left;
}

.routerLink {
  color: #fff;
  text-decoration: none;
}

// nav {
//   padding: 30px;

//   a {
//     text-decoration: none;
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>