import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Container, CardActionArea, Button }
  from "@material-ui/core";
import { Link } from "react-router-dom";
import Bunner from "./Bunner";
import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";

import "./style.css";

const Basket = ({ basketData, updateProduct, handleEmptyBasket, RemoveItemFromBasket }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 3000);
    if (showSpinner) {
      return <Spinner />;
    }
    return <Bunner />;
  };

  if (!basketData.line_items || !basketData.line_items.length) return loading();

  return (
    <Container id="basket">
      <Grid container justify="center" spacing={4}>
        {basketData.line_items.map((product) => {
          return (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Card className="custom-card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="600"
                    className="card-image"
                    image={product.media.source}
                    title="Contemplative Reptile" />

                  <CardContent>
                    <Typography className="titel" gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    {product.categories && <Typography className="titel_category" component="h2" variant="body2">
                      {product.categories[0].name}
                    </Typography>}
                    <Typography className="titel_brend" component="h2" variant="body2">
                      {"Zara"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="actions-content">
                  <Typography className="price" component="h2" gutterBottom variant="h5">
                    {product.price.formatted_with_symbol}
                  </Typography>
                </CardActions>
                <CardActions className="actions-content">
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      RemoveItemFromBasket(product.id);
                    }}
                  >
                    Remove
                    </Button>
                  <>
                    <Button
                      size="small"
                      variant="outlined"
                      className="increase-product-quantity"
                      onClick={() => {
                        updateProduct(product.id, product.quantity + 1);
                      }}
                    > + </Button>

                    <Typography>&nbsp; {product.quantity}&nbsp; </Typography>

                    <Button
                      size="small"
                      color="secondary"
                      variant="outlined"
                      onClick={() => {
                        updateProduct(product.id, product.quantity - 1);
                      }}
                    >
                      - </Button>
                  </>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div className="actions">
        <Button
          className="basketBtn"
          size="small"
          variant="contained"
          component={Link} to="/products">
          Continue Shop
        </Button>

        <Button
          className="basketBtn"
          size="small"
          color="secondary"
          variant="contained"
          margin-left=" 2px"
          onClick={handleEmptyBasket}
        >
          Empty Basket
        </Button>

        <Button
          className="basketBtn"
          size="small"
          variant="contained"
          component={Link} to="/checkout"
          

        >
          Checkout
        </Button>


      </div>
    </Container>
  );
};

export default Basket;
