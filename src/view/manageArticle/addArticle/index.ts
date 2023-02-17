import { ArticleType } from "@/type/index";
type PickFromArticleType = "cid" | "content" | "openId" | "picInfo";

export type ArticleFormType = Pick<ArticleType, PickFromArticleType>;
