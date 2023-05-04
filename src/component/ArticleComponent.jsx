import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const ArticleComponent = ({ title, by, score, time }) => {
  let date = new Date(time * 1000)

  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{mb: 1.5}}>
            author: {by}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{mb: 1.5}}>
            rating: {score}
          </Typography>
          <Typography color="text.secondary">
            {`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ArticleComponent
