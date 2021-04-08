import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";



function GenderSlide({url, id}) {
  
  return (
      <div>
      <Link to="/products"><img className= "caruselHomeImg" src={url} alt={id} /></Link>
      </div>
   
  );
}
  


export default GenderSlide;
