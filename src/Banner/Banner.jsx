import React,{useEffect, useState} from "react";
import axios from "../Axios";
import "./Banner.css";
import {API_KEY,image_URL} from "../ConsistentURLs/BasicURLs";

function Banner() {
  const[movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{console.log(response.data.results);
    
     setMovie(response.data.results[Math.floor(Math.random()*19)]);
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie ?image_URL+movie.backdrop_path : '' })`}} className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name  :''}</h1>
        <div className="banner_button">
          <button className="button">Play</button>
    
        </div>
        <p className="para">{movie ? movie.overview : ''}</p>
      </div>
      <div className="fade_bottom"></div>

    </div>
    
  );
  
}




export default Banner;
