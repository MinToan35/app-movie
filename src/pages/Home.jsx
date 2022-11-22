import React from "react";
import HeroSlide from "../components/HeroSlide";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/Button";
import MovieList from "../components/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";
const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className="px-5">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-base first-line:font-bold ">Trending Movies</h2>
          <Link to="/movie">
            <OutlineButton type="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.movie} type={movieType.popular} />
      </div>
      <div className="px-5">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-base first-line:font-bold ">Top Rated Movies</h2>
          <Link to="/movie">
            <OutlineButton type="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.movie} type={movieType.top_rated} />
      </div>
      <div className="px-5">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-base first-line:font-bold ">Trending TV</h2>
          <Link to="/movie">
            <OutlineButton type="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.popular} />
      </div>
      <div className="px-5">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-base first-line:font-bold ">Top Rated TV</h2>
          <Link to="/movie">
            <OutlineButton type="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div>
    </div>
  );
};

export default Home;
