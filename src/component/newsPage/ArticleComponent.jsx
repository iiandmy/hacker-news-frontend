import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { getFormattedDate } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";

const ArticleComponent = ({ id, title, by, score, time }) => {
  const navigate = useNavigate()
  let date = new Date(time * 1000)

  const handleCardClick = () => {
    navigate(`/article/${id}`)
  }

  return (
    <Card>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
            author: {by}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
            rating: {score}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { getFormattedDate(date) }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ArticleComponent
