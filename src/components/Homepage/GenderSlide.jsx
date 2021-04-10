import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";



function GenderSlide({url, id, filterTrends}) {

const changeCategory= (e) =>{
  filterTrends("All");
}

  return (
      <div>
      <Link to="/products" onClick={changeCategory}><img className= "caruselHomeImg" src={url} alt={id} /></Link>
      </div>
   
  );
}
  


export default GenderSlide;
