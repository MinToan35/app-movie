import React from "react";
import apiConfig from "../../api/apiConfig";
import Button, { OutlineButton } from "../Button";
import { useNavigate } from "react-router-dom";

const HeroSlideItem = (props) => {
  let navigate = useNavigate();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const isSlideActive = props.isActive
    ? "visible translate-y-0"
    : "invisible translate-y-[-3rem]";
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
            <OutlineButton>Watch trailer</OutlineButton>
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
    </div>
  );
};

export default HeroSlideItem;
