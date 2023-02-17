export type UploadProps = {
  onPreview: (uploadFile: UploadFileType) => void;
  onRemove: (uploadFile: UploadFileType, uploadFiles: UploadFileType[]) => void;
  handleFilesChange: (
    uploadFile: UploadFileType,
    uploadFiles: UploadFileType[]
  ) => void;
};

export interface UploadFileType {
  name: string;
  size: number;
  status: "ready" | "success";
  uid: number;
  url: string;
  raw: File;
}

export interface ComponentPropsType {
  isDrag: boolean;
  limit: number;
  autoUpload: boolean;
  multipleble: boolean;
}
