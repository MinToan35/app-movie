import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import HeroSlideItem from "./HeroSlideItem";
const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 10));
      } catch (error) {
        console.log("error");
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      <Swiper className="mb-12">
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem isActive={isActive} item={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
