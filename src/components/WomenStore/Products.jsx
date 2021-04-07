// import { Link } from "react-router-dom";
import { Grid, Container } from "@material-ui/core"
import Product from "./Product";
import "./style.css";
export default function Products({products, categories,addProduct}) {
  

  return (

    <div className="productsComponent">
      <Container id="products" >
        <Grid container spacing={4}>
          {products.map((product) => {
            return (<Grid key={product.id} item xs={12} sm={6} md={4}>
          <Product product={product} addProduct={addProduct} categories={categories}/>
            </Grid>
            );

          })}
        </Grid>
      </Container>
    </div>

  )
}
