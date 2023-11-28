"use client"
import axios from '@/utils/axios'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  // console.log(params.id)
  const id = params.id

  const [movieDets, setMovieDets] = useState({})


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axios.get(`/movie/${id}?api_key=b6330e59d17035fa955abd01c083646b`)
        setMovieDets(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovieDetails()
  }, [])
  // console.log(movieDets)

  const movieDetsbgimg = {
    height: "75vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDets.backdrop_path})`,
  };
  return (
    <>
      <div className="search text-white" style={movieDetsbgimg}>
        <h1>Welcome.</h1>
        <h3> Millions of movies, TV shows and people to discover. Explore now.</h3>
      </div>
      <div class="card text-bg-dark">
        <img src={`https://image.tmdb.org/t/p/original/${movieDets.backdrop_path}`} class="card-img" alt="..."/>
          <div class="card-img-overlay">
            <h5 class="card-title">{movieDets.title}</h5>
            <p class="card-text">{movieDets.overview}</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
      </div>
    </>
  )
}

export default page
