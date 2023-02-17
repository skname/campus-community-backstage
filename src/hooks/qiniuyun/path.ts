function getYearAndMonthAndDay() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return year + "/" + month + "/" + day + "/";
}

// 上传文章内图片
export function generateArticlePath() {
  const path = `article-picture/${getYearAndMonthAndDay()}`;
  return path;
}
