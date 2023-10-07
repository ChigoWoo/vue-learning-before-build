<template>
  <div class="home">
    <div>This is new content of HomeView</div>
    <img alt="My logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Chigo's Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
