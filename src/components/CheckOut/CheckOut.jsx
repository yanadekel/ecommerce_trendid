import { Paper, Container, Typography} from '@material-ui/core';
import React from 'react';
import "./style.css";


const CheckOut = () => {
  return (
    <div className="checkout">
      <Container>
        <Paper className="paper" elevation= {3}>
          <Typography align="center" variant="h5" gutterBottom>
            Checkout
          </Typography>
        </Paper>
      </Container>
      
    </div>
  )
}

export default CheckOut;
