<template>
  <div id="intro">
    <router-view />
    <h1>This is an introduction information page</h1>
    <router-view />
    <router-link to="/index/intro-view/router-nest">
      <div>这里是路由嵌套，点击显示页面（路由）（在本页面显示）</div>
    </router-link>
    <router-link to="/index/intro-view/router-nest2">
      <div>这里也是路由嵌套，点击跳转至子页面（路由）(单独一页显示)</div>
    </router-link>
    <router-view />
    <router-view />
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: blue;
}
#intro div {
  color: red;
  margin-bottom: 20px;
}
</style>