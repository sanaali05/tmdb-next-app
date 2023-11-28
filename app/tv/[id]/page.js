"use client"
import axios from '@/utils/axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const id= params.id

    const [tvDetails,setTvDetails] = useState({})

    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const {data}=await axios.get(`/tv/${id}?api_key=b6330e59d17035fa955abd01c083646b`)
                console.log("this is data",data)
            setTvDetails(data)
            } catch (error) {
                console.log()
            }
        }
        fetchData()
    },[id])

    console.log("this is details",tvDetails)

    const tvDetailsbgimg = {
        height: "75vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvDetails.backdrop_path})`,
      };
  return (

    <>
      {/* <div className="card text-bg-dark" >
        <img src={`https://image.tmdb.org/t/p/original/${tvDetails.backdrop_path}`} className="card-img" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">title:{tvDetails.name}</h5>
            <p className="card-text">overview:{tvDetails.overview}</p>
            <p className="card-text"><small>{tvDetails.first_air_date}</small></p>
          </div>
      </div> */}
    </>
  )
}

export default page
