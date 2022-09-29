import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../entire/home.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
