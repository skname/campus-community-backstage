import type { NavMenuList } from "@/type/index";
export const title: string = "太大丫丫后台";
export const navList: NavMenuList = [
  {
    index: 1,
    name: "文章管理",
    icon: "menu",
    children: [
      {
        index: 1,
        name: "发表文章",
        path: "AddArticle",
        icon: "plus",
      },
      {
        index: 2,
        name: "所有文章",
        path: "AllArticle",
        icon: "pieChart",
      },
    ],
  },
  {
    index: 2,
    name: "用户管理",
    path: "",
  },
];
