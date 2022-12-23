import { AxiosResponse, AxiosRequestConfig } from "axios";
import { timeOutMessage } from "@/utils/index";
import { customMessage } from "@/utils/index";
export const config = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 8000,
  headers: {},
};

// 响应拦截器
export const ResponseInterceptorsResolve = (
  res: AxiosResponse
): AxiosResponse => {
  const { code, message } = res.data;
  if (code != 200) {
    customMessage(message);
  }
  return res;
};

export const ResponseInterceptorsReject = (err: unknown) => {
  console.warn(err);
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
