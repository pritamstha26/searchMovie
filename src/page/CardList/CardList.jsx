import React from "react";
import useDataQuery from "../../hooks/useDataQuery";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
export default function CardList() {
  const { data, isLoading } = useDataQuery("dat");
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    navigate(`/main/${data.id}`);
  };
  if (isLoading)
    return (
      <div className=" h-screen flex justify-center items-center">
        <p className=" text-7xl">Loading...</p>
      </div>
    );
  return (
    <div>
      {data.map((val, index) => {
        return <Card key={index} data={val} handleClick={handleNavigate} />;
      })}
    </div>
  );
}
