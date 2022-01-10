<template>
  <div>
    <router-link to="/about/a">a</router-link>
    <hr />
    <router-link to="/about/b">b</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
