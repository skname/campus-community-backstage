import { getAction, uploadFileAction } from "@/request/index";
import {
  config,
  QiUploadHook,
  UploadFileProps,
  generatePath,
  ResultUpload,
} from "./QConfig";
export async function getToken() {
  const { token } = await getAction<{ token: string }>(config.getToken);
  return token;
}

export const useUploadByQi: QiUploadHook["useUploadByQi"] = function () {
  const upload: QiUploadHook["upload"] = async function (file) {
    const { key } = await uploadFileAction<ResultUpload>(config.url, file);
    const url = config.domain + "/" + key;
    return url;
  };

  const uploadFile: QiUploadHook["uploadFile"] = async function (files, path) {
    const Token = await getToken();
    const paths = files.map((item) => {
      const uploadParam: UploadFileProps = {
        key: generatePath(path, item.name),
        token: Token,
        file: item.raw,
      };
      return upload(uploadParam, path);
    });
    const urls = await Promise.all(paths);
    return urls.join(",");
  };

  return [uploadFile];
};
