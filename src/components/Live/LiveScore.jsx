import React, { useEffect, useState } from 'react'
import "./livescore.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";







function LiveScore() {



  const [count, setCount] = useState([]);
  console.log("count", count)
  useEffect(() => {
    if (count.length === 0) {


      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c56554ae32mshecc5ce4686ba3b3p18e9a1jsnce6b5e35a784',
          'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
      };

      fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=cricket', options)
        .then(response => response.json())
        .then(response => {
          console.log(response.Stages)
          setCount(response.Stages)
        }
        )
        .catch(err => console.error(err));
    }
  }, [count])


  console.log(count[0])


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
          count.map((elem,i)=>{
            
            return(
            <div key={elem.Sid} className="slider-div">
              <h1>Location : {elem.Ccd}</h1>
                      <h1>{elem.Snm}</h1>
                      <h2 className='highnav'>Highlight : {elem.Events[0].ECo}</h2>
                      <h1>{elem.Events[0].EpsL}</h1>
                      <h1>{elem.Events[0].EtTx}</h1>
                      
                      <h2>Played matches : {elem.Events.length}</h2>
            </div>
            )
          })
         }
         {
          count.map((elem,i)=>{
            
            return(
            <div key={elem.Sid} className="slider-div">
              <h1>Location : {elem.Ccd}</h1>
                      <h1>{elem.Snm}</h1>
                      <h2 className='highnav'>Highlight : {elem.Events[0].ECo}</h2>
                      <h1>{elem.Events[0].EpsL}</h1>
                      <h1>{elem.Events[0].EtTx}</h1>
                      
                      <h2>Played matches : {elem.Events.length}</h2>
            </div>
            )
          })
         }
          {
          count.map((elem,i)=>{
            
            return(
            <div key={elem.Sid} className="slider-div">
              <h1>Location : {elem.Ccd}</h1>
                      <h1>{elem.Snm}</h1>
                      <h2 className='highnav'>Highlight : {elem.Events[0].ECo}</h2>
                      <h1>{elem.Events[0].EpsL}</h1>
                      <h1>{elem.Events[0].EtTx}</h1>
                      
                      <h2>Played matches : {elem.Events.length}</h2>
            </div>
            )
          })
         }
          {
          count.map((elem,i)=>{
            
            return(
            <div key={elem.Sid} className="slider-div">
              <h1>Location : {elem.Ccd}</h1>
                      <h1>{elem.Snm}</h1>
                      <h2 className='highnav'>Highlight : {elem.Events[0].ECo}</h2>
                      <h1>{elem.Events[0].EpsL}</h1>
                      <h1>{elem.Events[0].EtTx}</h1>
                      
                      <h2>Played matches : {elem.Events.length}</h2>
            </div>
            )
          })
         }
          {
          count.map((elem,i)=>{
            
            return(
            <div key={elem.Sid} className="slider-div">
              <h1>Location : {elem.Ccd}</h1>
                      <h1>{elem.Snm}</h1>
                      <h2 className='highnav'>Highlight : {elem.Events[0].ECo}</h2>
                      <h1>{elem.Events[0].EpsL}</h1>
                      <h1>{elem.Events[0].EtTx}</h1>
                      
                      <h2>Played matches : {elem.Events.length}</h2>
            </div>
            )
          })
         }
        
         
          
        
      </Slider>
    </div> </div>
  )
}



export default LiveScore
