"use client"
import React, { useEffect, useState } from 'react'
import axios from '@/utils/axios'
import Link from 'next/link';

const page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`/movie/now_playing?api_key=b6330e59d17035fa955abd01c083646b&page=${currentPage}`);
        setNowPlayingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const loadMoreHandler = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };
 
  return (
    <>
      <section className='now-playing-movies'>
        <h1>Now playing</h1>
        <div className="container d-flex">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {nowPlayingMovies.map((item, i) => {
              return (
                <div key={i} className="col">
                  <div className="card h-100">
                    <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="card-img-top" alt="..." style={{ height: "200px" }} />
                    <div className="rating text-white ms-3 d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", width: "39px", height: "39px", marginTop: "-25px", backgroundColor: "#081C22" }}>
                      <p className='m-0' style={{ whiteSpace: "nowrap" }}>{`${item.vote_average * 10}`}<small>%</small> </p>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><Link href={`/movie/${item.id}`}>{item.title}</Link></h5>
                      <h6 className="card-text"></h6>
                    </div>
                    <div className="card-footer">
                      <small className="text-body-secondary">{item.release_date}</small>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>

        </div>
        <button className='btn btn-primary ' onClick={loadMoreHandler} >Load More</button>

      </section>


    </>
  )
}

export default page
