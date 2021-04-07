import React from 'react';
import { Card, CardMedia, CardContent, CardActions, CardActionArea,Typography } from "@material-ui/core";






const Trend = ({filterTrends, name, about, img, id }) => {
 

  const findCategery=  () =>{
   
    filterTrends(id);
   
  }

  
  
  return (
    <div>
      <Card onClick={findCategery} className="custum-card">
        <CardActionArea>
          <Typography  style={{textAlign:"center", marginTop:"10px"}} className="titel" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <CardContent>
          <Typography className="cardText" component="p" variant="body2">
            {about}
          </Typography>
          </CardContent>
         
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            className="card-image"
            image={img}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions className="actions-content">
        </CardActions>
      </Card>
    </div>
  )
}

export default Trend;
