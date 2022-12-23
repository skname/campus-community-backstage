interface StorageDataType {
  [key: string]: object;
}
interface StorageSessionType {
  setItem: (key: string, data: object) => void;
  getItem: (key: string) => object | null;
  removeItem: (key: string) => void;
}
// sessionStorage 方法
const StorageSession: StorageSessionType = {
  setItem(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  },
  getItem(key) {
    const dataStr = sessionStorage.getItem(key);
    if (!dataStr) {
      return null;
    }
    return JSON.parse(dataStr);
  },
  removeItem(key) {
    sessionStorage.removeItem(key);
  },
};
// storage 存储空间
let StorageData: StorageDataType = {};

window.addEventListener("unload", () => {
  // 在这里缓存数据
  const keys = Object.keys(StorageData);
  for (let i = 0; i < keys.length; i++) {
    const key: string = keys[i];
    StorageSession.setItem(key, StorageData[key]);
  }
});

export function useSessionStorage<T extends object>(
  key: string,
  data: T
): [newData: T, removeSessionStorage: Function] {
  const storageData: T = StorageSession.getItem(key) as T;
  //   存放进去
  const keys = Object.keys(StorageData);
  if (keys.includes(key)) {
    console.warn("The key is already exist!");
  }
  StorageData[key] = data;
  const removeSessionStorage = function () {
    if (!StorageData[key]) return;
    // StorageSession.removeItem(key);
    delete StorageData[key];
  };
  const newData: T = storageData || data;
  return [newData, removeSessionStorage];
}
