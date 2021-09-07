<template>
  <div class="home">
    <button @click="toLists">进入列表页</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {};
  },
  methods: {
    toLists () {
      //   this.$store.commit("GET_CATCHE_COMPONENTS", ["Lists"]);
      this.$router.push({ name: "Lists" });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
}
</style>
