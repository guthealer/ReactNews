import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


export default function NewsCard(props) {

  const title = props.item.title;
  const description = props.item.description;
  const imageurl = props.item.urlToImage

  const news_url = props.item.url
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 200}}
        image={imageurl}
        title="news image"
     
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Link href={news_url} target='_blank'>
        <Button size="small">Read More</Button></Link>
      </CardActions>
    </Card>
  );
}