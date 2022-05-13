import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/nueva-transferencia",
    name: "nueva-transferencia",
    component: () => import("../views/NuevaTransferenciaView.vue"),
  },
  {
    path: "/cartola-transferencia",
    name: "cartola-transferencia",
    component: () => import("../views/CartolaTransferenciaView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
