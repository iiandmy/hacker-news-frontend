import React from "react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import NewsStore from "../store/NewsStore";
import ArticleComponent from "./ArticleComponent";
import {Container} from "@mui/material";

const NewsComponent = observer(() => {
  useEffect(() => {
    NewsStore.fetchNews().catch((error) => {
      console.log(error)
    })
  }, []);


  return (
    <Container>
      <button onClick={() => {NewsStore.fetchNews()}}>Click</button>
      {NewsStore.news.map((article) => {
        return(
          <ArticleComponent
            {...article}
            key={article.id}
          />
        )
      })}
    </Container>
  )
})

export default NewsComponent
