import {makeAutoObservable} from "mobx";
import NewsFetchService from "../network/NewsFetchService";

class ArticleStore {
  article = {}

  constructor() {
    makeAutoObservable(this)
  }

  async fetchArticle(articleId) {
    const loadedArticle = await NewsFetchService.fetchItem(articleId)
    this.setArticle(loadedArticle)
  }

  setArticle(article) {
    this.article = article
  }
}

export default new ArticleStore()