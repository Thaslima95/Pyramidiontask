import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import './style.css'
import MovieList from '../MovieList';
export default function Home() {
const [movies,setMovies]=useState([])
const [details,setDetails]=useState([])

const getMovies = async () =>
  await axios.get(`/movielist`);


  const loadMovies = () =>
    getMovies().then((c) => setMovies(c.data));

    const getoneMovie=(slug)=>{
      getMovieDetails(slug).then((d)=>setDetails(d))
    }
    const getMovieDetails=async(slug)=>{
      const res=await axios.get(`/movielist/${slug}`)
      return res.data
     

    }
    const {title,producer,actors}=details;
  return (
   <>
   
  
    <button onClick={loadMovies}>Get Movie List</button>
    {movies ? movies.map((c) => (
            <div className="alert alert-primary" key={c._id}>
              <span onClick={()=>getoneMovie(c.slug)} className="spantitle">{c.title} </span>
             
              
                
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
