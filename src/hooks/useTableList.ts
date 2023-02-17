import { reactive } from "vue";
import { getAction } from "@/request/index";
import { customMessage } from "@/utils/index";
import { ArticleType } from "@/type/index";
import { handleFormatter } from "@/view/manageArticle/allArticle/index";
interface UrlData {
  init: string;
  delete: string;
}

interface Result {
  status: any;
  handlePageChange: (pageNumber: number) => void;
  handleDelete: (articleInfo: ArticleType) => void;
  handleBatchDelete: () => void;
  handleEdit: () => void; // 打开编辑页面
  handleCloseModal: () => void; // 关闭编辑页面
  handleConfirm: () => void; // 确认编辑页面修改
  handleSearch: () => void;
  handleMultipleTableSelectChange: (selection: ArticleType[]) => void; // 多选
} // hook 返回结果
interface RequestResult {
  records: ArticleType[];
  total: number;
}

interface TableListHookType {
  (
    id: string | number,
    Url: UrlData,
    FindData: Record<string, unknown>
  ): Result;
}
export interface TableStatusType {
  isLoading: boolean;
  isShowDialog: boolean;
  listData: ArticleType[];
  total: number;
  pageSize: number;
  selection: ArticleType[];
}

export const useTableInit: TableListHookType = function (id, Url, searchData) {
  //   发起请求初始化
  const defaultParam = {
    pageSize: 10,
    pageNumber: 1,
  };

  // 组件默认状态
  const status = reactive<TableStatusType>({
    isLoading: true,
    listData: [],
    total: 0,
    pageSize: defaultParam.pageSize,
    isShowDialog: false,
    selection: [],
  });

  const init = function () {
    const params = Object.assign(defaultParam, searchData); // 合并新的查询条件
    status.isLoading = true;
    getAction<RequestResult>(Url.init, params).then((res) => {
      id === "ArticleList" && handleFormatter(res.records);
      status.isLoading = false;
      status.listData = res.records;
      status.total = res.total;
    });
  };

  // 处理删除
  const handleDelete: Result["handleDelete"] = function (articleInfo) {
    const { aid, openId } = articleInfo;
    getAction(Url.delete, { aid, openId }).then(
      () => {},
      (error) => {
        console.warn("删除错误");
      }
    );
  };
  // 处理批量删除
  const handleBatchDelete = function () {
    if (!status.selection.length) {
      return customMessage("请选中后操作！", "warning");
    }
  };
  // 打开编辑页面
  const handleEdit = function () {
    status.isShowDialog = true;
  };
  // 关闭编辑页面
  const handleCloseModal = function () {
    status.isShowDialog = false;
  };
  // 确认编辑页面修改
  const handleConfirm = function () {};
  // 处理 查询
  const handleSearch = function () {
    init();
  };
  // 处理页码改变
  const handlePageChange: Result["handlePageChange"] = function (pageNumber) {
    defaultParam.pageNumber = pageNumber;
    init();
  };
  // 多选框改变
  const handleMultipleTableSelectChange: Result["handleMultipleTableSelectChange"] =
    function (selection) {
      status.selection = selection;
    };

  init();

  return {
    status,
    handlePageChange,
    handleDelete,
    handleEdit,
    handleSearch,
    handleCloseModal,
    handleConfirm,
    handleMultipleTableSelectChange,
    handleBatchDelete,
  };
};
