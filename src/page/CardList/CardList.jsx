import React, { useState } from "react";
import useDataQuery from "../../hooks/useDataQuery";
import Card from "../../components/Card/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import axios from "axios";
import { ChevronUp } from "lucide-react";
export default function CardList() {
  const [keyword, setKeyword] = useState({
    searchBar: "",
  });
  const location = useLocation();
  console.log(location);

  const [searchResult, setSearchResults] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeyword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (keyword.searchBar === "") return alert("Movie title required");
      const api_key = import.meta.env.VITE_MOVIE_SEARCH_API;

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${keyword.searchBar}&api_key=${api_key}`
      );
      setSearchResults(() => response?.data.results);
    } catch (error) {
      console.log("error occured while searching movie");
    }

    setKeyword({ searchBar: "" });
  };
  const { data, isLoading } = useDataQuery("dat");
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    navigate(`/home/${data.id}`);
  };
  if (isLoading)
    return (
      <div className=" h-screen flex justify-center items-center">
        <p className=" text-7xl">Loading...</p>
      </div>
    );
  const movieToShow = searchResult.length > 0 ? searchResult : data;

  const handleToOrigin = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-2 items-center py-3"
      >
        <SearchBar keyword={keyword} handleChange={handleChange} />
        <Button type="submit" label="search" />
      </form>

      <div>
        {movieToShow.map((val, index) => {
          return <Card key={index} data={val} handleClick={handleNavigate} />;
        })}
      </div>
      <div className="fixed bottom-8 right-5 bg-amber-400 rounded-full h-10 w-10 flex justify-center items-center">
        <button onClick={handleToOrigin}>
          <ChevronUp />
        </button>
      </div>
    </div>
  );
}
