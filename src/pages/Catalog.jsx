import React from "react";
import PageHeader from "../components/PageHeader";
import { category as cate } from "../api/tmdbApi";
import { useParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";
const Catalog = () => {
  const { category } = useParams();
  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series "}
      </PageHeader>
      <div>
        <MovieGrid category={category} />
      </div>
    </>
  );
};

export default Catalog;
