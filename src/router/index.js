import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/Lists",
    name: "Lists",
    component: () => import("@/views/Lists.vue"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/Detail",
    name: "Detail",
    component: () => import("@/views/Detail"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
