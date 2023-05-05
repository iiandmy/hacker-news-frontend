import React from 'react';
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { AppBar, Box, CircularProgress, Container, IconButton, Toolbar, Typography, Card, CardContent } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import ArticleComponent from "./ArticleComponent";
import ArticleStore from "../../store/ArticleStore";
import { useNavigate, useParams } from 'react-router-dom';
import { loadingCircleFormat } from '../../utils/Utils';

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
      <Container maxWidth="md" sx={{ marginY: "2rem" }}>
        {
          ArticleStore.article.time === undefined ?
            <Container style={loadingCircleFormat}>
              <CircularProgress />
            </Container> :
            <ArticleComponent
            {...ArticleStore.article}
          />
        }
      </Container>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Comments: {ArticleStore.article.descendants}
            </Typography>
          </CardContent>
        </Card>
        
      </Container>
    </Box>


  )
})

export default ArticlePage
