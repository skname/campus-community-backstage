import type { UploadFileType } from "@/component/upload/index";

export const config = {
  url: "https://up-z1.qiniup.com",
  domain: "https://img.skself.work",
  getToken: "/artpic/getToken",
};

export interface UploadFileProps {
  key: string;
  file: File;
  token: string;
}

export interface QiUploadHook {
  uploadFile: (files: UploadFileType[], path: string) => Promise<string>;
  useUploadByQi: () => [QiUploadHook["uploadFile"]];
  upload: (file: UploadFileProps, path: string) => Promise<string>;
}

export interface ResultUpload {
  hash: string;
  key: string;
}

export function generatePath(dir: string, fileName: string): string {
  return dir + fileName;
}
