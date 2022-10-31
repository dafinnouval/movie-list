import React from "react";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Popular = ({ movies, searchValue, setSearchValue }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="max-w-10xl py-6 px-4 sm:px-6 lg:px-8 bg-black">
      <h1 className="text-2xl text-white my-3">POPULAR MOVIES</h1>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        ></input>
      </label>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
        <div id={"slider"} className="flex flex-nowrap overflow-x-scroll scroll-smooth scrollbar-hide">
          {movies
            .filter((result) => result.title.toLowerCase().includes(searchValue))
            .map((result, index) => {
              return (
                <div className=" justify-content-start m-4 " id="trending" key={index}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg relative transform-[0.2s] h-auto hover:scale-75" style={{ transition: "transform 0.2s" }}>
                    <img className="w-full h-64 " src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt=""></img>
                    {/* <div className=" py-4 mx-10">
                    <div className="font-bold text-white text-xl mb-2">{result.title}</div>
                  </div> */}
                    <div className="px-6 pt-4 pb-2 ">
                      <Link
                        to={`/detail/${result.id}`}
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Detail
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
      </div>
    </div>
  );
};

export default Popular;
