import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import CastList from "./CastList";
import VideoList from "./VideoList";
import { Link } from "react-router-dom";
import { OutlineButton } from "../../components/Button";
import MovieList from "../../components/MovieList";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);
  return (
    <>
      {item && (
        <>
          <div
            className="h-[50vh] relative bg-center bg-cover bg-no-repeat before:content-['']  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-overlay after:content-['']  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[100px] after:bg-gradient-to-t after:from-[#0f0f0f] after:to-[rgba(0,0,0,0)]"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="flex gap-8  justify-start items-start max-w-[1260px] mx-auto mt-[-200px] relative px-8">
            <div
              className="flex-1 relative bg-center bg-cover bg-no-repeat rounded-[30px] pt-[70vh] hidden md:block"
              style={{
                backgroundImage: `url(${apiConfig.originalImage(
                  item.poster_path || item.backdrop_path
                )})`,
              }}
            ></div>
            <div className="w-full md:w-[70%] relative">
              <h1 className="text-[4rem] font-bold leading-[4rem]">
                {item.title || item.name}
              </h1>
              <div className="flex flex-wrap gap-2 mt-12 mb-8">
                {item.genres.slice(0, 5).map((genre, i) => (
                  <span
                    key={i}
                    className="px-6 py-2 border-[2px] border-white rounded-full text-xl font-semibold bg-[#0f0f0f]"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="capitalize text-basic">{item.overview}</p>
              <div>
                <div>
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <VideoList id={item.id} />
            </div>
            <div className="px-5">
              <div className="flex w-full justify-between items-center">
                <h2 className="text-base first-line:font-bold ">
                  Top Rated TV
                </h2>
                <Link to="/movie">
                  <OutlineButton type="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
