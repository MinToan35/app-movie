import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import { category } from "../api/tmdbApi";
import Button from "./Button";
import { BsFillPlayFill } from "react-icons/bs";
const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div
        className="group bg-top bg-no-repeat bg-cover pt-[160%] rounded-[30px] mb-4 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:hover:bg-black before:hover:opacity-80 before:rounded-[30px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-0 duration-300 group-hover:scale-100">
          <Button>
            <BsFillPlayFill />
          </Button>
        </div>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
