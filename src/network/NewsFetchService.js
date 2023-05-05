import axios from "axios";

class NewsFetchService {
  hackerNewsApiUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json'
  getArticleApiUrl = (itemNumber) => `https://hacker-news.firebaseio.com/v0/item/${itemNumber}.json`

  fetchNews = async () => {
    const response = await axios.get(this.hackerNewsApiUrl)
    return response.data
  }

  fetchArticle = async (articleId) => {
    const response = await axios.get(this.getArticleApiUrl(articleId))
    return response.data
  }
}

export default new NewsFetchService()