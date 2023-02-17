export function isUndef(
  param: string | undefined | null | Array<any> | object
) {
  if (Array.isArray(param)) {
    return param.length === 0;
  }
  if (typeof param === "object") {
    return Object.keys(param!).length === 0;
  }
  return param === "" || param === undefined || param === null;
}
