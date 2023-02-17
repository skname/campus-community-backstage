import { reactive } from "vue";
import { ArticleType } from "@/type/index";

// 请求 url
export const url = {
  init: "/article/list",
  delete: "/article/delete",
  edit: "",
  public: "/article/upload",
};

// 查找数据
export const searchData = reactive({
  searchContent: "",
  cid: 0, // 数据类型
  openId: "",
  nickName: "",
});

// 文章类型数据
export const CidMap = [
  { value: "0", label: "广场" },
  { value: "1", label: "热门" },
  { value: "2", label: "太大男神女神墙" },
  { value: "3", label: "扩列" },
  { value: "4", label: "二手" },
  { value: "5", label: "失物" },
  { value: "6", label: "吐槽" },
  { value: "7", label: "游戏" },
  { value: "8", label: "纳新" },
];

export function handleFormatter(list: ArticleType[]) {
  list.forEach((item) => {
    item.cidMap = CidMap[item.cid].label;
  });
}
