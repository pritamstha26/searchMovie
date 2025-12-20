import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useFetchById(id) {
  const fetchData = async () => {
    const api_key = import.meta.env.VITE_MOVIE_SEARCH_API;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchById"],
    queryFn: fetchData,
  });
  return { data, isLoading, error };
}
