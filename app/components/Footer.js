"use client";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container " style={{backgroundColor:"#032541"}}>
         
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="col">
              <div className="card h-100 border-0" style={{backgroundColor:"transparent",borderRadius:"0"}}>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className="card-img-top w-50" alt="..." />
                <div className="card-body">
                  <button type="button" className="btn btn-light btn-sm" style={{color:"#12B6DD",fontWeight:"bold"}}>Join the community</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 "style={{backgroundColor:"transparent",borderRadius:"0"}}>
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-white">The Basics</h5>
                   <ul className="list-unstyled">
                    <li><a className="text-decoration-none text-white" href="">About TMDB</a></li>
                    <li><a className="text-decoration-none text-white" href="">Contact Us</a></li>
                    <li><a className="text-decoration-none text-white" href="">Support Forums</a></li>
                    <li><a className="text-decoration-none text-white" href="">API</a></li>
                    <li><a className="text-decoration-none text-white" href="">System Status</a></li>
                   </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 "style={{backgroundColor:"transparent",borderRadius:"0"}}>
                <div className="card-body">
                  <h5 className="card-title text-white">GET INVOLVED</h5>
                  <ul className="list-unstyled">
                    <li><a className="text-decoration-none text-white" href="">Contribution Bible</a></li>
                    <li><a className="text-decoration-none text-white" href="">Add New Movie</a></li>
                    <li><a className="text-decoration-none text-white" href="">Add New TV Show</a></li>
                   </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 "style={{backgroundColor:"transparent",borderRadius:"0"}}>
                <div className="card-body">
                  <h5 className="card-title text-white">COMMUNITY</h5>
                  <ul className="list-unstyled">
                    <li><a className="text-decoration-none text-white"href="">Guidelines</a></li>
                    <li><a className="text-decoration-none text-white"href="">Discussions</a></li>
                    <li><a className="text-decoration-none text-white"href="">Leaderboard</a></li>
                    <li><a className="text-decoration-none text-white"href="">Twitter</a></li>
                   </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 "style={{backgroundColor:"transparent",borderRadius:"0"}}>
                <div className="card-body">
                  <h5 className="card-title text-white">LEGAL</h5>
                  <ul className="list-unstyled ">
                    <li><a className="text-decoration-none text-white" href="">Terms of Use</a></li>
                    <li><a className="text-decoration-none text-white" href="">API Terms of Use</a></li>
                    <li><a className="text-decoration-none text-white" href="">Privacy Policy</a></li>
                    <li><a className="text-decoration-none text-white" href="">DMCA Takedown Request</a></li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
