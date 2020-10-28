import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import { BannerContents, HeroBanner, HeroTitle } from "./Banner.styled";
import { HashRouter } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <HashRouter>
      <HeroBanner
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "center",
        }}
      >
        <HeroTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </HeroTitle>
        <BannerContents></BannerContents>
        {/*div width 2 buttons*/}
        {/*description*/}
      </HeroBanner>
    </HashRouter>
  );
};

export default Banner;
