import React,{useEffect,useState} from 'react'
import axios from "../Axios";
import './Ropost.css'
import {image_URL} from '../ConsistentURLs/BasicURLs'
// import { romance } from '../Urls';
function Rowpost({title,isSmall,url}) {
  const[movie,setMovie]=useState([]);
  useEffect(()=>{
    axios.get(url).then((response)=>
      {
        // console.log(response.data);
    setMovie(response.data.results)
  })
  },)
  return (
    <div className='rowpost'>
        <h2>{title}</h2>
      <div className="posters">
      {movie.map((obj)=>
          <img className={isSmall? 'small_poster':'poster'} src={`${image_URL+obj.poster_path}`} alt="poster" />
      )}
        
       </div>
    </div>
  )
}

export default Rowpost
