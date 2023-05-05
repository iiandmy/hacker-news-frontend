import axios from "axios";

class NewsFetchService {
  hackerNewsApiUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json'
  getItemApiUrl = (itemNumber) => `https://hacker-news.firebaseio.com/v0/item/${itemNumber}.json`

  fetchNews = async () => {
    const response = await axios.get(this.hackerNewsApiUrl)
    return response.data
  }

  fetchItem = async (itemId) => {
    const response = await axios.get(this.getItemApiUrl(itemId))
    return response.data
  }
}

export default new NewsFetchService()