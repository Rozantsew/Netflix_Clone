import React, { useState, useEffect } from "react";
import { StyledHeader, RowPosters, RowPoster, LargerRow } from "./Row.styled";
import axios from "../../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

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
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          ) : (
            <RowPoster
              key={movie.id}
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </RowPosters>

      {/*container => posters*/}
    </div>
  );
}

export default Row;
