<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <hr />
    <router-view a="1" b="2"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(this._routerRoot);
  },
};
</script>

<style>
body {
  color: aliceblue;
  background-color: #666;
}
</style>
