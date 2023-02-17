export interface ArticleType {
  aid: number; // 文章 id
  cid: number; // 文章类型
  content: string; // 文章内容
  createTime: string; // 发布时间
  headPic: string; // 头像
  nickName: string; // 昵称
  openId: string;
  readNum: number; // 阅读量
  picInfos: string[] | null; // 配图
  cidMap: string;
  picInfo: string;
}
