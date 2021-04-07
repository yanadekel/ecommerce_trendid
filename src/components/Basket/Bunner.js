import {Container, Typography, Button, Grid} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./style.css";

import React from 'react'

const  Bunner = ()=> {
  return (
    <div className ="basket-bunner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h1">
              Baskit is empty, press shopping for adding new products
            </Typography>
            <Button className="shopping-button" component={Link} to="/products">
              Back To Shopping
            </Button>
          </Grid>
          <Grid className="brand" item xs={12} sm={6}>
            <ShoppingCart/>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  )
}

export default Bunner;
