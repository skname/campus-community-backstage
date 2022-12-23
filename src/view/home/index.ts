import { reactive } from "vue";
import type { NavMenuList } from "@/type/index";
export const title: string = "青年大学习";
export const navList: NavMenuList[] = [
  {
    id: 0,
    name: "学习情况统计",
    path: "/detailedOverview",
  },
  {
    id: 1,
    name: "各系提交文件",
    path: "/fileView",
  },
];
