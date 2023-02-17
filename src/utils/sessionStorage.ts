interface StorageSessionType {
  setItem: (key: string, data: object) => void;
  getItem: (key: string) => object | null;
  removeItem: (key: string) => void;
}
// sessionStorage 方法
export const StorageSession: StorageSessionType = {
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

// export default StorageSession;
