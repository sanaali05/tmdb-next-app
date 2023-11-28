"use client";
import Link from "next/link";
import React from "react";
import { Plus, Search } from "react-bootstrap-icons";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg p-3" style={{ backgroundColor: "#032541" }}  >
        <div className="container-fluid">
          <Link href="/">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" width={"150px"} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Movies
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/movie/popular">Popular</a></li>
                  <li><a className="dropdown-item" href="/movie/now-playing">Now Playing </a></li>
                  <li><a className="dropdown-item" href="/movie/upcoming">Upcoming</a></li>
                  <li><a className="dropdown-item" href="/movie/top-rated">Top Rated</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tv Shows
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/tv/popular">Popular</a></li>
                  <li><a className="dropdown-item" href="/tv/airing-today">Airing Today</a></li>
                  <li><a className="dropdown-item" href="/tv/on-the-air">On TV</a></li>
                  <li><a className="dropdown-item" href="/tv/top-rated">Top Rated</a></li>
                </ul>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">
                  People
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">
                  More
                </a>
              </li>
            </ul>
            <ul className="nav nav-underline">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  <Plus color="white" size={20} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <button className="border bg-transparent text-white">
                    E
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Join TMDB
                </a>
              </li>
              <li className="nav-item">
                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"   >
                  <Search color="white" size={20} />
                </button>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
            <div class="container-fluid">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
