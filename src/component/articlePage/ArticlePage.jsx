import React from 'react';
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {AppBar, Box, CircularProgress, Container, IconButton, Toolbar, Typography} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import ArticleComponent from "./ArticleComponent";
import ArticleStore from "../../store/ArticleStore";
import { useNavigate, useParams } from 'react-router-dom';

const ArticlePage = observer(() => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    ArticleStore.fetchArticle(params.id).catch((error) => {
      console.log(error)
    })
  }, [])

  const handleGoBackClick = () => {
    ArticleStore.setArticle({})
    navigate('/')
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleGoBackClick}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hacker News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
        {
          ArticleStore.article.time === undefined ?
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "2rem" }}>
              <CircularProgress />
            </Container> :
            <ArticleComponent
            {...ArticleStore.article}
          />
        }
      </Container>
    </Box>


  )
})

export default ArticlePage
