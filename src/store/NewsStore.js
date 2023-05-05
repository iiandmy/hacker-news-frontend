import { action, makeObservable, observable } from "mobx";
import NewsFetchService from "../network/NewsFetchService";

class NewsStore {
    news = []
    NEWS_LIMIT = 100

    constructor() {
        makeObservable(this, {
            news: observable,
            loadNews: action,
            setNews: action,
            addArticle: action
        })
    }

    async loadNews() {
        let articleIdList = await NewsFetchService.fetchNews()
        this.setNews([])

        for (const articleId of articleIdList.slice(0, this.NEWS_LIMIT)) {
            const article =  await NewsFetchService.fetchArticle(articleId)
            this.addArticle(article)
        }
    }

    addArticle(article) {
        this.news.push(article)
    }

    setNews(news) {
        this.news = news
    }
}

export default new NewsStore()
