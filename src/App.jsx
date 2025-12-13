import React, { useEffect, useState } from "react";
import axios from "axios";
import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import Card from "./components/Card/Card";

export default function App() {
  const fetchData = async () => {
    const api_key = import.meta.env.VITE_MOVIE_SEARCH_API;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    );
    return response.data.results;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["dat"],
    queryFn: fetchData,
  });
  console.log(data);

  if (isLoading) return <p>loading</p>;
  return (
    <div className=" ">
      <Card data={data[0]} />;
    </div>
  );
}
