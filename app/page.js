"use client";
import React, { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";


const page = () => {
  const router = useRouter();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const searchbgimg = {
    width: "100vw",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "top",
    // position:"fixed",
    backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg')`,
  };

  const trendingbgimg = {
    width: "100vw",
    height: "400px",
    backgroundSize: "contain",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')`,
  };

  const latestTrailerBgImg = {
    width: "100vw",
    // height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg')`,
  };

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = async (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  }

  const setTodayHandler = async () => {
    try {
      alert("today clicked")
      const { data } = await axios.get("/trending/all/day?api_key=b6330e59d17035fa955abd01c083646b")
      const result = data.results
      setTrendingMovies(result)
    } catch (error) {
      console.log(error)
    }
  }
  const setThisWeekHandler = async () => {
    try {
      alert("week clicked")
      const { data } = await axios.get("/trending/all/week?api_key=b6330e59d17035fa955abd01c083646b")
      const result = data.results
      setTrendingMovies(result)
    } catch (error) {
      console.log(error)
    }
  }
  const NextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };
  const PreviousPage = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  };


  const fetchTrendingmovies = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day?api_key=b6330e59d17035fa955abd01c083646b&page=${currentPage}`);
      const trendingMoviesResult = data.results;
      setTrendingMovies(trendingMoviesResult);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    fetchTrendingmovies();
  }, [currentPage])

  const btnToday={
    borderRadius:"35px",
    // border:"2px solid black",
    backgroundColor:"#032541",
    color:"#47CBA7"
  }
  const btnGroup={
    borderRadius:"35px",
    border:"1px solid light ",
    gap:"1"
  }
  return (
    <>
      <section id="home-page">
        <div class="card text-bg-dark" style={{ height: "25rem" }}>
          <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg"} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <div className="container-fluid p-5 ">
              <h1 class="card-title">Welcome</h1>
              <h3 class="card-text">Millions of movies, TV shows and people to discover. Explore now.</h3>
              <form className="d-flex " role="search">
                <input className="form-control me-2 border-0" type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for a movie,Tv Show, person..." aria-label="Search" style={{ width: "1000px", borderRadius: "80px" }} />
                <button onClick={handleSearch} className="btn btn-lg" type="submit" style={{ borderRadius: "80px", backgroundColor: "#b5a2c4" }}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="trending" >
          <div className="container" style={trendingbgimg}>
            <div className="trend-header d-flex gap-4 py-3 ">
              <h4>Trending</h4>
              <div className="btn-group gap-2" style={btnGroup} role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                <label className="btn" htmlFor="btnradio1" onClick={setTodayHandler} style={btnToday} > Today </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label className="btn" htmlFor="btnradio2" onClick={setThisWeekHandler} style={btnToday}>  This Week </label>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {trendingMovies.map((item, i) => {
                return (
                  <div key={i} className="col" >
                    <div className="card h-100 border-0" >
                      <div className="image border " style={{ height: "275px", borderRadius: "30px", overflow: "hidden" }}>
                        <img style={{ height: "100%", objectFit: "cover", objectPosition: "center" }} src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} className="card-img-top" alt="..." />
                      </div>
                      <div className="rating text-white ms-3 d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", width: "39px", height: "39px", marginTop: "-25px", backgroundColor: "#081C22" }}>
                        <p className='m-0' style={{ whiteSpace: "nowrap" }}>{`${Math.floor(item.vote_average * 10)}`}<small>%</small> </p>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title m-0 "><Link className="text-decoration-none text-dark" href={`/movie/${item.id}`}>{item.title}</Link></h5>
                        <h6 className="card-text mt-1"><small className="text-body-secondary ">{item.release_date}</small></h6>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className="navigation d-flex gap-2">
                <button className='btn btn-secondary d-inline-block' onClick={PreviousPage}> &laquo; Previous</button>
                <button className='btn btn-light d-inline-block' onClick={NextPage}>Next &raquo;</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="latest-trailer" style={latestTrailerBgImg}>
          <div className="container">
            <div className="latest-trailer-header d-flex gap-4 py-3 text-white">
              <h4>Latest Trailers</h4>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group" >
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked />
                <label className="btn btn-outline-primary" htmlFor="btnradio3"> Streaming </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio4">  On Tv  </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio5">  For Rent </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio6">  In Theaters </label>
              </div>
            </div>
            <div className="latest-trailer-card-wrapper border border-primary text-white d-flex gap-4" style={{ overflowX: "auto", overflowY: "hidden" }} >
              <div className="latest-trailer-card border border-danger mb-5" style={{ width: "320px" }}  >
                <div className="video border" style={{ borderRadius: "12px", height: "200px", overflow: "hidden", }} >
                  <video src=""></video>
                </div>
                <div className="details text-center my-3">
                  <h4>Fear and Desire</h4>
                  <h6>Premiere Version Trailer</h6>
                </div>
              </div>
              <div
                className="latest-trailer-card border border-danger mb-5  "
                style={{ width: "320px" }}
              >
                <div
                  className="video border"
                  style={{
                    borderRadius: "12px",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <video src=""></video>
                </div>
                <div className="details text-center my-3">
                  <h4>Fear and Desire</h4>
                  <h6>Premiere Version Trailer</h6>
                </div>
              </div>
              <div
                className="latest-trailer-card border border-danger mb-5"
                style={{ width: "320px" }}
              >
                <div
                  className="video border"
                  style={{
                    borderRadius: "12px",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <video src=""></video>
                </div>
                <div className="details text-center my-3">
                  <h4>Fear and Desire</h4>
                  <h6>Premiere Version Trailer</h6>
                </div>
              </div>
              <div
                className="latest-trailer-card border border-danger mb-5  "
                style={{ width: "320px" }}
              >
                <div
                  className="video border"
                  style={{
                    borderRadius: "12px",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <video src=""></video>
                </div>
                <div className="details text-center my-3">
                  <h4>Fear and Desire</h4>
                  <h6>Premiere Version Trailer</h6>
                </div>
              </div>
              <div
                className="latest-trailer-card border border-danger mb-5"
                style={{ width: "320px" }}
              >
                <div
                  className="video border"
                  style={{
                    borderRadius: "12px",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <video src=""></video>
                </div>
                <div className="details text-center my-3">
                  <h4>Fear and Desire</h4>
                  <h6>Premiere Version Trailer</h6>
                </div>
              </div>
              <div
                className="latest-trailer-card border border-danger mb-5  "
                style={{ width: "320px" }}
              >
                <div
                  className="video border"
                  style={{
                    borderRadius: "12px",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <video src=""></video>
                </div>
                <div className="details text-center my-3">
                  <h4>Fear and Desire</h4>
                  <h6>Premiere Version Trailer</h6>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default page;
