import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import './style.css';
import { useSelector,useDispatch } from 'react-redux';
import _ from "lodash";
export default function Home() {
const [movies,setMovies]=useState([])
const [details,setDetails]=useState([])
const movieList=useSelector((state) => ({ ...state }))
const [find,setFind]=useState(false)



const handleMovie=(slug)=>{
  

for (let [key, value] of Object.entries(movieList)) {
    // console.log(key, value);
    if (Object.values(value).indexOf(slug) > -1) {
  //  console.log(slug);
   setDetails(value)
   setFind(!find)
   
}





}
setFind(!find)
if(find)
{
  getoneMovie(slug)

}

}


const dispatch=useDispatch();
const getMovies = async () =>
  await axios.get(`/movielist`);

  let movie = [];
    if (typeof window !== "undefined") {
      
      if (localStorage.getItem("movie")) {
        movie = JSON.parse(localStorage.getItem("movie"));
      }
     
      movie.push({
        ...details
      }
      );
      // remove duplicates
      let unique = _.uniqWith(movie, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("movie", JSON.stringify(unique));
    }

  const loadMovies = () =>
    getMovies().then((c) => setMovies(c.data));

    const getoneMovie=(slug)=>{
      getMovieDetails(slug).then((d)=>setDetails(d))
    }
    const getMovieDetails=async(slug)=>{
      const res=await axios.get(`/movielist/${slug}`)
      dispatch({
        type:"ADD_MOVIE",
        payload:movie
      })
      return res.data
     

    }
    
    const {title,producer,actors}=details;
  return (
   <>
   
  
    <button onClick={loadMovies}>Get Movie List</button>
    {movies ? movies.map((c) => (
            <div className="alert alert-primary" key={c._id}>
              {/* <span onClick={()=>getoneMovie(c.slug)} className="spantitle">{c.title} </span> */}
             <span onClick={()=>handleMovie(c.slug)} className="spantitle">{c.title} </span> 
             
              
                
            </div>
          )) : ""}
         
          
          {(movies!==[]) ? (<>
          {producer && <h1>Producer Name:{producer}</h1>}
          {title && <h2>Movie Title :{title}</h2>}
          {actors && <h3>Actors :{actors && actors.map((a,i)=><span>{(i ? ',' : '')+a}</span>)}</h3>}
          </>
          ): ""}
         
    </>
  )
}
