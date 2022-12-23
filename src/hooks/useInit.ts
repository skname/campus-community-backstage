import { reactive, Ref } from "vue";
import { getAction, postAction } from "@/request";

interface UrlList {
  initApi: string;
  deleteApi?: string;
  addApi?: string;
}
interface Search {}

interface InitTable {
  (dataList: Ref, urlList: UrlList, search: Search): {
    handleQuery: Function;
    handleDelete: Function;
    handleAdd: Function;
  };
}
// search 条件
// urlList api

// 返回 list 方法
export const useTableInit: InitTable = (dataList, urlList, search) => {
  //分页数据
  const handleQuery = () => {
    getAction(urlList.initApi, search).then((res) => {
      // 数据渲染
      dataList.value = res.data;
    });
  };
  const handleDelete = (params) => {
    // getAction
    getAction(urlList.deleteApi!, params);
  };
  const handleAdd = (data) => {
    // postAction
    postAction(urlList.addApi!, data);
  };
  return { handleQuery, handleDelete, handleAdd };
};
