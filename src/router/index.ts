import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import routes from "./router";
export default createRouter({
  routes,
  history: createWebHistory(),
});
