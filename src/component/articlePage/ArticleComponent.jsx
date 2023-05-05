import React from "react";
import { Card, CardContent, Grid, Button, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { getFormattedDate } from "../../utils/Utils";

const ArticleComponent = ({ by, title, url, time, descendants }) => {
  let date = new Date(time * 1000)

  return (
    <Card>
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <AccountCircle />
          <Typography variant="body2" sx={{ marginX: "0.25rem" }}>{ by }</Typography>
          <Typography variant="body2" color="text.secondary">-</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginX: "0.25rem" }}>
            { getFormattedDate(date) }
          </Typography>
        </Grid>
        <Typography variant="h6" sx={{ marginY: "1rem" }}>{ title }</Typography>
        <Button target="_blank" variant="contained" component={Link} to={url}>Go to article</Button>
      </CardContent>
    </Card>
  )
}

export default ArticleComponent
