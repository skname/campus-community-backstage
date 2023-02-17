import { AxiosResponse, AxiosRequestConfig } from "axios";
import { timeOutMessage } from "@/utils/index";
import { customMessage } from "@/utils/index";
// 响应结果类型
interface ResponseResult {
  code: number;
  msg: string;
  data: Record<string, unknown> | undefined | null;
}
// 请求配置
export const config = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
};

// 响应拦截器
export const ResponseInterceptorsResolve = (
  res: AxiosResponse<ResponseResult>
): AxiosResponse => {
  console.log(res);
  const { code, msg } = res.data;
  code == 200 && customMessage(msg, "success");
  code != 200 && customMessage(msg, "warning");
  return res;
};

export const ResponseInterceptorsReject = (err: unknown) => {
  console.warn("响应超时", err);
  // 响应超时
  timeOutMessage();
};

// 请求拦截器
export const RequestInterceptorsResolve = function (
  config: AxiosRequestConfig
): AxiosRequestConfig {
  // 对 get 参数做编码处理
  return config;
};

export const RequestInterceptorsReject = function (err: unknown) {
  console.warn(err, "请求错误");
};
