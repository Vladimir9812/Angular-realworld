import { ArticleInterface } from "../../../types/article.interface";

export interface GetFeedResponceInterface {
  article: ArticleInterface[],
  articlesCount: number;
}