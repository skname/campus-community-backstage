import axios from "axios";
import {
  config,
  ResponseInterceptorsResolve,
  ResponseInterceptorsReject,
  RequestInterceptorsResolve,
  RequestInterceptorsReject,
} from "./config";
const request = axios.create(config);

// request.defaults.headers.common["Content-Type"] = "application/json";

// 添加响应拦截器
request.interceptors.response.use(
  ResponseInterceptorsResolve,
  ResponseInterceptorsReject
);
// 添加请求拦截器
request.interceptors.request.use(
  RequestInterceptorsResolve,
  RequestInterceptorsReject
);

export default request;
