import { ElMessage } from "element-plus";
import "element-plus/dist/index.css";
type MessageType = "warning" | "success" | "error" | "message";

interface TipMessage {
  (message?: string): void;
}
export const timeOutMessage: TipMessage = () => {
  ElMessage({
    message: "服务器请求超时！",
    type: "warning",
    center: true,
    showClose: true,
  });
};

export const customMessage: TipMessage = (message) => {
  ElMessage({
    message: message,
    type: "warning",
    center: true,
    showClose: true,
  });
};
