import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function useDataQuery({ para = "dat" }) {
  const fetchData = async () => {
    const api_key = import.meta.env.VITE_MOVIE_SEARCH_API;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    );
    return response.data.results;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [para],
    queryFn: fetchData,
  });

  return { data, isLoading, error };
}
