export function handleDownEvent(data: any) {
  const blob = new Blob([data], { type: "application/zip" });
  console.log(blob);
  let link: HTMLElement = document.createElement("a");
  link.style.display = "none";
  const objUrl = URL.createObjectURL(blob);
  link.setAttribute("href", objUrl);
  link.setAttribute("download", "daxuexi.zip");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); //下载完成移除元素
  window.URL.revokeObjectURL(objUrl); //释放掉blob对象
}
