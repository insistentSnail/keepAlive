<template>
  <div class="lists">
    <ul>
      <li
        v-for="(item, index) in lists"
        :key="index"
        :class="index == activeIndex ? 'active' : ''"
        @click="routerTo(item, index)"
      >
        {{ item.title }}-{{ item.id }}
      </li>
    </ul>

    <button @click="$router.push({ name: 'About' })">
      去about页面，返回需要刷新数据
    </button>
  </div>
</template>

<script>
export default {
  name: "Lists",
  data () {
    return {
      lists: [
        {
          id: 1,
          title: "新闻列表",
        },
        {
          id: 2,
          title: "新闻列表",
        },
        {
          id: 3,
          title: "新闻列表",
        },
        {
          id: 4,
          title: "新闻列表",
        },
      ],
      activeIndex: null,
    };
  },
  created () {
    console.log("created", this.activeIndex);
  },
  activated () {
    console.log("activated", this.activeIndex);
  },
  // 方案一
  // 从该页面进入其他页面时才调用
  //   beforeRouteLeave(to, from, next) {
  //     // from 永远是 lists页面
  //     if (to.path == "/Detail") {
  //       // 去往详情页的话，lists页面需要缓存
  //       from.meta.keepAlive = true;
  //     } else {
  //       from.meta.keepAlive = false;
  //       setTimeout(() => {
  //         window.location.reload(); // 为啥需要强制刷新  不刷新的话再次进入时，再点击详情返回，缓存的是上一次的数据
  //       }, 300);
  //     }
  //     next();
  //   },

  // 方案二
  beforeRouteLeave (to, from, next) {
    //要在离开该组件的时候控制需要缓存的组件，否则将出现第一次不缓存的情况
    if (to.path === "/Detail") {
      // 去往详情页的时候需要缓存组件，其他情况下不需要缓存
      this.$store.commit("GET_CATCHE_COMPONENTS", ["Lists"]); //注意，'home'将匹配首先检查组件自身的 name 选项（非router.js里的），如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。
    } else {
      this.$store.commit("GET_CATCHE_COMPONENTS", []);
    }
    next();
  },

  beforeRouteEnter (to, from, next) {
    next((vm) => {
      console.log(from.path);
      if (from.path === "/About" || from.path === "/") {
        vm.$store.commit("GET_CATCHE_COMPONENTS", ["Lists"]);
      }
    });
  },

  methods: {
    routerTo (item, index) {
      this.activeIndex = index;
      this.$router.push({ name: "Detail", query: { id: item.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.lists {
  ul {
    // list-style: none;
    width: 200px;
    li {
      cursor: pointer;
      &.active {
        color: #f00;
      }
    }
  }
}
</style>
