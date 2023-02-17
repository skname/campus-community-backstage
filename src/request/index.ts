import request from "./axios";
export async function getAction<T extends object>(
  url: string,
  params = {}
): Promise<T> {
  const { data } = await request.get(url, {
    params,
  });
  return data.data;
}

export async function postAction<T extends object>(
  url: string,
  datas = {}
): Promise<T> {
  const { data } = await request.post(url, datas);
  return data.data;
}

export const downFile = (url: string) => {};

export async function uploadFileAction<T>(
  url: string,
  file: Record<string, any>
): Promise<T> {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const { data } = await request.post(url, file, config);
  return data;
}
