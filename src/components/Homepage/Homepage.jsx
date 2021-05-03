import React, { useState, useEffect } from 'react';
import trendid_json from "../TRENDiD.API/trendid_json.json"
import GenderSlide from './GenderSlide';
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function HomePage({filterTrends}) {
  const [GenderData, setGenderData] = useState([]);
 

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  useEffect(() => {
    const search = () => {
      // const data = await axios.get('https://trend-d-49ba4-default-rtdb.firebaseio.com/gender.json');
      const data =trendid_json.gender;
      console.log(data);
      setGenderData(data);
    }

    search();

    
  }, []);



  return (
    <div className="homeImgCarusel">

      <Slider {...settings}>
        {GenderData.map((gender) => {
          return (

            <GenderSlide id={gender.id} url={gender.url} key={gender.id} filterTrends={filterTrends}/>
          )
        }
        )
        }
      </Slider>
    </div>
  )
}
