import React, { useEffect, useState } from 'react'
import './movies.css'
import axios from '../Axios'
import {API_KEY,image_URL} from '../ConsistentURLs/BasicURLs'



function Movies() {
    const[movie,setMovie] = useState([])
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response=>{console.log(response.data);
       setMovie(response.data.results[8])
        }))
    },[])
   

  return (
    <div style={{backgroundImage:`url(${movie ? image_URL+movie.backdrop_path : '' })`}} className='movies'>
    <div className='moviecont'>
     <h1 className='movietitle'>{movie ? movie.title || movie.name : ''}</h1>
   
    <div >
        <button className='moviebutton'>Watch Trailer</button>
        <button  className='moviebutton'>+ My List</button>
    </div>
    <p className='moviedis'>{movie ? movie.overview : ''}</p>
    </div>
    </div>
  )
}

export default Movies
