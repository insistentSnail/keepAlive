<template>
  <div id="app">
    <keep-alive :include="catch_components">
      <router-view></router-view>
    </keep-alive>

    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["catch_components"]),
  },
  watch: {
    catch_components (val) {
      console.log(val, "缓存的值");
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
