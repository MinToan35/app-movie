import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="grid grid-cols-auto-fill gap-4">
      {casts.map((item, i) => (
        <div key={i} className="w-full">
          <div
            className="pt-[160px] bg-cover mb-2"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
