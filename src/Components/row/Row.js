import React, { useState, useEffect } from "react";
import { StyledHeader, RowPosters, RowPoster, LargerRow } from "./Row.styled";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // pulling information when it loads
    // if [], run once when the row loads, and dont run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    host: 'https://www.youtube.com',
    height: "390px",
    width: "100%",
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'autohide': 1,
      'wmode': 'opaque',
      'origin': 'http://localhost:3000'
    }
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          console.log(urlParams)
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      <StyledHeader>{title}</StyledHeader>
      <RowPosters>
        {/*several row poster*/}
        {movies.map((movie) => {
          // Conditionali render row
          return isLargeRow ? (
            <LargerRow
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          ) : (
              <RowPoster
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${base_url}${movie.backdrop_path}`}
                alt={movie.name}
              />
            );
        })}
      </RowPosters>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
    </div>
  );
}

export default Row;
