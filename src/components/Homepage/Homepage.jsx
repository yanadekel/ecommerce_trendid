import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenderSlide from './GenderSlide';
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function HomePage() {
  const [GenderData, setGenderData] = useState([]);
  // const [genderState, setGenderState] = useState("women");
  // const [leftBtnState, setLeftBtnState]=useState("Men");
  // const [rihgtBtnState, setRightBtnState]=useState("Kids");

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slides"

  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const search = async () => {
      const data = await axios.get('https://trend-d-49ba4-default-rtdb.firebaseio.com/gender.json', { cancelToken: source.token });
      const dataArr = data.data
      console.log(dataArr);
      setGenderData(dataArr);
    }

    search();

    return () => {
      source.cancel()
    }
  }, []);



  return (
    <div className="homeImgCarusel">

      <Slider {...settings}>
        {GenderData.map((gender) => {
          return (

            <GenderSlide id={gender.id} url={gender.url} key={gender.id} />
          )
        }
        )
        }
      </Slider>
    </div>
  )
}
