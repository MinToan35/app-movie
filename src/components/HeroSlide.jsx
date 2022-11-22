import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category, movieType } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
import { useNavigate } from "react-router-dom";
import Button, { OutlineButton } from "./Button";
import Modal from "./Modal";
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

const HeroSlideItem = (props) => {
  let navigate = useNavigate();
  const { item } = props;
  const [active, setActive] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const isSlideActive = props.isActive
    ? "visible translate-y-0"
    : "invisible translate-y-[-3rem]";

  const setSrc = async () => {
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    setActive(true);
    setVideoSrc(
      videos.results.length > 0
        ? "https://www.youtube.com/embed/" + videos.results[0].key
        : null
    );
  };
  return (
    <div
      className="py-36 relative h-full bg-center bg-cover bg-no-repeat before:content-['']  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-overlay  after:content-['']  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[100px] after:bg-gradient-to-t after:from-[#0f0f0f] after:to-[rgba(0,0,0,0)]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="min-h-[50vh] flex  ">
        <div className="px-12 lg:w-[70%]">
          <h2
            className={`text-[5rem] font-semibold delay-300 duration-300 ${isSlideActive}`}
          >
            {item.title}
          </h2>
          <div
            className={`mt-12 font-semibold delay-[0.6s] duration-300 ${isSlideActive}`}
          >
            {item.overview}
          </div>
          <div
            className={`mt-12 flex gap-4 delay-[0.9s] duration-300 ${isSlideActive}`}
          >
            <Button onClick={() => navigate("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={() => setSrc()}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hidden lg:block mr-20 shadow-img">
          <img
            className={`rounded-[30px]  duration-700 ${
              props.isActive ? "scale-100" : "scale-0"
            }`}
            src={apiConfig.w500Image(item.poster_path)}
            alt=""
          />
        </div>
      </div>
      {active && (
        <Modal
          item={videoSrc}
          onClose={() => setActive(false)}
          active={active}
        />
      )}
    </div>
  );
};

export default HeroSlide;
