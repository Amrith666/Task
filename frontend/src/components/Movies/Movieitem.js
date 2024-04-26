import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Movieitem = ({ id, title, posterUrl, releaseDate }) => {
  return (
    <div>
      <Card sx={{ margin: 2, width: 250, height: 320, borderRadius: 5, ":hover": {
        boxShadow: "10px 10px 20px #ccc"
      } }}>
        <CardMedia
          component="img"
          height="50%"
          image={posterUrl} 
          alt={title} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(releaseDate).toDateString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{margin:"auto"}} size="small">Share</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Movieitem;
