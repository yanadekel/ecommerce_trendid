import React from 'react';
import "./style.css"

function GenderSlide({url, id}) {
  return (
    <div>
      <section className="slideContainer">
        <img className="slideImg" src={url} alt={id} />
      </section>
    </div>
  )
}

export default GenderSlide
