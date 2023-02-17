import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    children: [
      {
        path: "/allArticle",
        name: "AllArticle",
        component: () => import("@/view/manageArticle/allArticle/article.vue"),
      },
      {
        path: "/addArticle",
        name: "AddArticle",
        component: () =>
          import("@/view/manageArticle/addArticle/addArticle.vue"),
      },
    ],
    component: () => import("@/view/home/home.vue"),
    props: true, // 当 props 设置为 true 时，route.params 将被设置为组件的 props。
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/view/login/login.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/view/404.vue"),
  },
];
export default routes;
