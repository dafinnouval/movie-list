import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    retrieveMovieDetail(id);
  }, []);

  const retrieveMovieDetail = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      });

      // console.log(response.data);
      setMovieDetail(response.data);
    } catch (error) {
      console.log(error, "<== error retrieve movie detail");
    }
  };

  return (
    <div>
      <div className="w-full h-[300px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[300px] bg-gradient-to-r from-black"></div>
          <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`} alt="" />
          <div className="absolute w-full top-[10%]  p-4 md:p-8">
            <h1 className="text-3xl text-center md:text-5xl font-bold">{movieDetail?.title}</h1>
          </div>
        </div>
      </div>
      <div className="max-w-10xl py-6 px-4 sm:px-6 lg:px-8 text-white">
        <div className=" p-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h4>
            Judul : <span className="">{movieDetail.title}</span>
          </h4>
          <h4>
            Tanggal : <span className="">{movieDetail.release_date}</span>
          </h4>
          <h4>
            Popularitas : <span className="">{movieDetail.popularity}</span>
          </h4>
          <h4>
            Ratings : <span className="">{movieDetail.vote_average}</span>
          </h4>
          <h4>
            Status : <span className="">{movieDetail.status}</span>
          </h4>
          <h4>
            Deskripsi : <span className="">{movieDetail.overview}</span>
          </h4>
          <Link
            to={`/`}
            className="inline-flex mt-4 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
