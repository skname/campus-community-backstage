import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    redirect: "",
    children: [
      {
        path: "",
        name: "",
        redirect: "",
      },
    ],
    component: () => import("@view/home/home.vue"),
  },
];
export default routes;
