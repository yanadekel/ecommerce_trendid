import "./style.css";
import React from 'react';
import { Container, Grid } from "@material-ui/core";
import Trend from "./Trend";
import { Link } from "react-router-dom";



const Categories = ({filterTrends, trends}) => {

  return (
    <div className="categorisComponent">
      <Container id="trends">
        <Grid container spacing={4}>
          {console.log(trends)}
          {trends.map((trend) => {
            
            return (<Grid key={trend.name} item xs={12} sm={6} md={4}>
              <Link style={{textDecoration:"none"}} to="/products"> <Trend  id={trend.id} name={trend.name} img={trend.url} about={trend.about} filterTrends={filterTrends}/></Link>
              
            </Grid>
              )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default Categories;
