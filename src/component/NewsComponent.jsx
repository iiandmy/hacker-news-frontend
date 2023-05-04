import React from "react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import NewsStore from "../store/NewsStore";

export const NewsComponent = observer(() => {
  useEffect(() => {
    NewsStore.fetchNews()
  }, []);


  return (
    <div>
      <button onClick={() => {NewsStore.fetchNews()}}>Click</button>
      {NewsStore.news.map((article) => {
        return(
          <div key={article.id}>
            <a target={"_blank"} href={article.url}>{article.title}</a>
          </div>
        )
      })}
    </div>
  )
})

export default NewsComponent
