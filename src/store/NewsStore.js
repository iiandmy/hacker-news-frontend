import {action, makeObservable, observable} from "mobx";
import axios from "axios";

class NewsStore {
    hackerNewsApiUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json'
    getArticleApiUrl = (itemNumber) => `https://hacker-news.firebaseio.com/v0/item/${itemNumber}.json`
    news = []
    NEWS_LIMIT = 100

    constructor() {
        makeObservable(this, {
            news: observable,
            fetchNews: action,
            fetchArticle: action,
            setNews: action,
            addArticle: action
        })
    }

    async fetchNews() {
        const response = await axios.get(this.hackerNewsApiUrl)
        let data = response.data.slice(0, this.NEWS_LIMIT)
        this.setNews([])

        for (const articleId of data) {
            const article =  await this.fetchArticle(articleId)
            this.addArticle(article)
        }
    }

    async fetchArticle(articleId) {
        const response = await axios.get(this.getArticleApiUrl(articleId))
        return response.data
    }

    addArticle(article) {
        this.news.push(article)
    }

    setNews(news) {
        this.news = news
    }
}

export default new NewsStore()
