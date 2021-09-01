<template>
  <div class="detail">
    <h2>我是新闻详情{{ $route.query.id }}</h2>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.detail {
}
</style>
