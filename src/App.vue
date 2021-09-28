<template>
  <div>
    <router-link to="/a">A</router-link>
    <router-link>B</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  color: aliceblue;
  background-color: #666;
}
</style>
