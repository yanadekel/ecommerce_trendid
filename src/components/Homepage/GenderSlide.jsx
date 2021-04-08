import React from 'react';
import "./style.css";



function GenderSlide({url, id}) {
  
  return (
      <div>
      <img hightsrc={url} alt={id} />
      </div>
   
  );
}
  


export default GenderSlide;
