import React from "react";
import Banner from "../Components/Banner";
import NavigationBar from "../Components/NavigationBar";
import Popular from "../Components/Popular";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  // console.log(movie);

  const [searchValue, setSearchValue] = useState("");
  // console.log(searchValue);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        // console.log("datas => ", response.data.results);
        setMovies(response.data.results);
      });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <NavigationBar />
      <Banner movie={movie} truncateString={truncateString} />
      <Popular movies={movies} searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
};

export default Home;
