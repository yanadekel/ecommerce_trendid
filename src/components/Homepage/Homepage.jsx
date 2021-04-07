import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenderSlide from './GenderSlide';
import "./style.css";

export default function HomePage() {
  const [GenderData, setGenderData] = useState([]);
  const [genderState, setGenderState] = useState("women");
  const [leftBtnState, setLeftBtnState]=useState("Men");
  const [rihgtBtnState, setRightBtnState]=useState("Kids");



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


  const changeToKids = () => {
    setGenderState("kids");
    setLeftBtnState("Women");
    setRightBtnState("");
  }

  const changeToMen = () => {
    setGenderState("men");
    setRightBtnState("Women");
    setLeftBtnState("");
    
  }

  return (
    <div className="homeImgCarusel">
      <button style={{ left: "0", position: "absolute", zIndex: "10", top: "50%" }} onClick={changeToMen}><i className="fas fa-chevron-left"></i><span className="right btn">{leftBtnState}</span></button>
      
      {GenderData
        .filter((gender) =>  gender.id === genderState? gender: "")
        .map((gender) => {
          return(
          
          <GenderSlide id={gender.id} url={gender.url} key={gender.id}/>
          )
        }
        )
      }
      <button style={{ right: "0", position: "absolute", zIndex: "10", top: "50%" }} onClick={changeToKids}><span className="right btn">{rihgtBtnState}</span><i className="fas fa-chevron-right"></i></button>
    </div>
  )
}
