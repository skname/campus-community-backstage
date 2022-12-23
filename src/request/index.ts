import request from "./axios";
interface ResponseResult {
  code: string;
  message: string;
  result?: Record<string, unknown> | undefined;
}

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
  const { data } = await request.post(url, {
    datas,
  });
  return data.data;
}

export const downFile = (url: string) => {};
