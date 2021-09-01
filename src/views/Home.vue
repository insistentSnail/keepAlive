<template>
  <div class="home">
    <button @click="$router.push({ name: 'Lists' })">进入列表页</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.home {
}
</style>
