import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
const VideoList = (props) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, props.id);
      setVideos(res.results.slice(0, 5));
    };
    getVideos();
  }, [category, props.id]);

  return (
    <div className="my-8 px-8 max-w-[1080px] w-full">
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </div>
  );
};

const Video = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="mb-8">
      <h2 className="mb-4 font-bold text-2xl">{item.name}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;
