import React, { useState } from "react";
import TableRow from "./TableRow";

export default function Table({ data }) {
  const movieDetails = [
    {
      id: 1,
      label: "Release date",
      value: data?.release_date,
    },
    {
      id: 2,
      label: "Language",
      value: data?.spoken_languages?.map((language) => language.name).join(","),
    },
    {
      id: 3,
      label: "Genre",
      value: data?.genres?.map((genre) => genre.name).join(", "),
    },
    {
      id: 4,
      label: "Status",
      value: data?.status,
    },
    {
      id: 5,
      label: "Budget",
      value: data?.budget?.toLocaleString(),
    },
  ];
  return (
    <table className=" w-full">
      <tbody className="">
        {movieDetails.map((details, index) => {
          return <TableRow key={index} details={details} />;
        })}
      </tbody>
    </table>
  );
}
