import axios from "../../axios";
import React, { useState, useEffect } from "react";
import requests from "../../requests";
import {
  BannerContents,
  HeroBanner,
  HeroTitle,
  BannerWrapper,
  BannerButton,
  StyledTitleDescription,
  BannerFadeBottom,
} from "./Banner.styled";
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

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <HashRouter>
      <HeroBanner
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "70% 20%",
        }}
      >
        <BannerContents>
          <HeroTitle>
            {movie?.title || movie?.name || movie?.original_name}
          </HeroTitle>

          <BannerWrapper>
            <BannerButton>Play</BannerButton>
            <BannerButton>My List</BannerButton>
          </BannerWrapper>
          <StyledTitleDescription>
            {truncate(movie?.overview, 150)}
          </StyledTitleDescription>
        </BannerContents>
        <BannerFadeBottom></BannerFadeBottom>
      </HeroBanner>
    </HashRouter>
  );
};

export default Banner;
