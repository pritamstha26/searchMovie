import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import useFetchById from "../../hooks/useFetchById";
import Hero from "./Hero";
import MovieDetails from "./MovieDetails";

export default function CardMain() {
  const { id } = useParams();
  const { data } = useFetchById(id);
  return (
    <main>
      <Hero data={data} />
      <MovieDetails data={data} />
    </main>
  );
}
