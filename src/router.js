import Vue from "vue";
import VueRouter from "../lib/vue-router/main";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
      children: [
        {
          path: "a", // 这里有/ 就是根路径了，不是子路径
          component: {
            render: (h) => h("h1", "about A"),
          },
        },
        {
          path: "b",
          component: {
            render: (h) => h("h1", "about B"),
          },
        },
      ],
    },
  ],
});

router.beforeEach((from, to, next) => {
  console.log("router.beforeEach");
  next();
  // setTimeout(() => {
  // }, 1000);
});

export default router;
