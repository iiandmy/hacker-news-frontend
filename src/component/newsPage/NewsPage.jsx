import React from "react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import NewsStore from "../../store/NewsStore";
import ArticleComponent from "./ArticleComponent";
import { AppBar, Container, Typography, Box, Toolbar, IconButton } from "@mui/material";
import { RefreshOutlined } from "@mui/icons-material";

const NewsPage = observer(() => {
  useEffect(() => {
    if (NewsStore.news.length !== 0) return
    NewsStore.loadNews().catch((error) => {
      console.log(error)
    })
  }, []);

  const handleRefreshClick = () => {
    NewsStore.loadNews()
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hacker News
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                color="inherit"
                onClick={handleRefreshClick}
              >
                <RefreshOutlined />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        <Container>
        </Container>
        <Container>
          {NewsStore.news
            .slice()
            .sort((a1, a2) => { return a1.time > a2.time ? -1 : 1 })
            .map((article) => {
            return(
              <Container sx={{marginBottom: "1rem"}}>
                <ArticleComponent
                  {...article}
                  key={article.id}
                />
              </Container>
            )
          })}
        </Container>
      </Container>
    </div>
  )
})

export default NewsPage
