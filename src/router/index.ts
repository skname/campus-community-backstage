import { createWebHistory, createRouter } from "vue-router";
import routes from "./router";
const Route = createRouter({
  routes,
  history: createWebHistory(),
});

// 添加全局守卫
Route.beforeEach((from, to) => {
  // 判断是否登录，否则跳转到 Login 页面
  const isAuthenticated: boolean = true;
  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // 避免无限重定向
    to.name !== "Login"
  ) {
    // 将用户重定向到登录页面
    return { name: "Login" };
  } 
});

export default Route;
