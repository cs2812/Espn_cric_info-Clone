import React, { useEffect, useState } from 'react'
import "./livescore.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const count=[
  {
Sid:1,
Ccd:"England v Australia",
Snm:"World Series",
ECo:"England Win by 120 points and 4 Wickets",
Epsl:"Live",
EtTx:"Live in England",
len:5
  },
  {
    Sid:2,
    Ccd:"New Zealand  v South Africa",
    Snm:"World Series",
    ECo:"One Batsman Was Injured during Match",
    Epsl:"Live",
    EtTx:"Live in Belgium",
    len:3
      },
      {
        Sid:3,
        Ccd:"India v SriLanka",
        Snm:"T20",
        ECo:"Rain during Match",
        Epsl:"Live",
        EtTx:"Live in India",
        len:8
          },
          {
            Sid:4,
            Ccd:"England v West Indies",
            Snm:"World Series",
            ECo:"West indies Win by 70 points and 5 Wickets",
            Epsl:"Live",
            EtTx:"Live in Australia",
            len:2
              },
              {
                Sid:5,
                Ccd:"India v Australia",
                Snm:"World Series",
                ECo:"India Win by 140 points and 3 Wickets",
                Epsl:"Live",
                EtTx:"Live in India",
                len:4
                  }
]




function LiveScore() {




  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
  };
  return (<div id='live-slider'>


    <div className='live-slider'> <h1> Matches({count.length}) </h1>
      <Slider {...settings} className={"slider-div-main"}>
        
         {
          count.map((elem)=>{
            
            return(
            <div key={elem.Sid} className="slider-div">
              <h1>Location : {elem.Ccd}</h1>
                      <h1>{elem.Snm}</h1>
                      <h2 className='highnav'>Highlight : {elem.ECo}</h2>
                      <h1>{elem.EpsL}</h1>
                      <h1>{elem.EtTx}</h1>
                      
                      <h2>Played matches : {elem.len}</h2>
            </div>
            )
          })
         }
        
  
      </Slider>
    </div> </div>
  )
}



export default LiveScore
