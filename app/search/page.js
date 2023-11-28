"use client"
import React, { useEffect, useState } from 'react'
import axios from '@/utils/axios'
import Link from 'next/link';
// import { useRouter } from 'next/navigation'

const page = (searchQuery) => {
  const [searchResults, setSearchResults] = useState([]);
  // console.log("query hai ye",searchQuery.searchParams.query)
  const query = searchQuery.searchParams.query

  useEffect(() => {
    // Fetch search results based on the query
    const fetchSearchResults = async () => {
      try {
        const { data } = await axios.get(`/search/movie?api_key=b6330e59d17035fa955abd01c083646b&query=${query}`);
        const results = data.results;
        console.log("ye hai result", results);
        setSearchResults(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchResults()
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/search/tv?api_key=b6330e59d17035fa955abd01c083646b&query=${query}`);
      const results = data.results;
      setSearchResults(results);
    };
    fetchData()
  }, [query])
  return (
    <>
      {/* <h1>your search results for :{query} </h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {searchResults.map((item, i) => (
            <div key={i} className="col">
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} className="card-img-top" alt="movie image" />
                <div className="card-body">
                  <h6>rating</h6>
                  <h5 className="card-title">{item.title}</h5>
                  <h6>{item.release_date}</h6>
                  <h5 className="card-title">{item.original_name}</h5>
                  <h6>{item.first_air_date}</h6>
                  <p>{item.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="section">
        <div className="container mt-3 mb-3">
          <div className="nav">
            <form className="d-flex " role="search">
              {/* <input className="form-control me-2 border-0" type="search" placeholder="Search for a movie,Tv Show, person..." aria-label="Search" style={{ width: "1000px", borderRadius: "80px" }} /> */}
              {/* <button className="btn btn-lg" type="" style={{ borderRadius: "80px", backgroundColor: "#72C8AF" }}>
                Search
              </button> */}
            </form>
          </div>
        </div>
        <div className="container ">
          <div class="card border-0">
            <div class="row g-0">
              <div class="col-md-3">
                <h1 style={{color:"#15B7DB"}}>Search Results For - <span className='text-uppercase' style={{color:"#032541"}} ><small>{query}</small> </span></h1>
              </div>
              <div class="col-md-9">
                {searchResults.map((item, i) => (
                  <div key={i} class="shadow card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title"><Link className="text-decoration-none text-dark" href={`/movie/${item.id}`}>{item.title}</Link></h5>
                          <h5 class="card-title"><Link className='text-decoration-none text-dark' href={`/tv/${item.id}`}>{item.original_name}</Link></h5>
                          <p class="card-text">{item.overview}</p>
                          <p class="card-text m-0"><small class="text-body-secondary">{item.release_date}</small></p>
                          <p class="card-text m-0"><small class="text-body-secondary">{item.first_air_date}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default page

