
import { Card, CardMedia, CardContent, CardActions, CardActionArea, Button, Typography }from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./style.css";


const Product =({product , addProduct}) =>{

  return (
    <Card className="custum-card">
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="600"
        className="card-image"
        image={product.media.source}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography className="titel" gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography className="titel_category" component="h2" variant="body2">
          {product.categories[0].name}
        </Typography>
        <Typography className="titel_brend" component="h2" variant="body2">
          {"Zara"}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className="actions-content">
      <>
      <Typography className="price" component="h2"  gutterBottom variant="h5">
          {product.price.formatted_with_symbol}
        </Typography>
      </>
      <Button size="large" className="custom-button" onClick={()=>{
        addProduct(product.id, 1)
      }}
      >
       <ShoppingCart /> Add to cart
        </Button>
      {/* <Button size="small" color="primary">
        Learn More
        </Button> */}
    </CardActions>
  </Card>
  )
}

export default Product;
