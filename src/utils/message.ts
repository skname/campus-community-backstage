import { ElMessage } from "element-plus";
import "element-plus/dist/index.css";
type MessageType = "warning" | "success" | "error" | "info";

interface TipMessage {
  (message?: string, type?: MessageType): void;
}
export const timeOutMessage: TipMessage = () => {
  ElMessage({
    message: "服务器请求超时！",
    type: "warning",
    center: true,
    showClose: true,
  });
};

export const customMessage: TipMessage = (message, type) => {
  ElMessage({
    message: message,
    type: type,
    center: true,
    showClose: true,
  });
};
