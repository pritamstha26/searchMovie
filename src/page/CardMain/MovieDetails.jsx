import React from "react";
import Table from "../../components/Table/Table";
import Rating from "../../components/Rating/Rating";

export default function MovieDetails({ data }) {
  return (
    <section className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-[#f8f8f8]">
      <div className="w-full md:w-auto lg:w-full ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
          alt=""
          className="w-full mx-auto max-w-xs object-cover h-full lg:w-full"
        />
      </div>
      <div className="col-span-2  flex flex-col justify-between  ">
        <Table data={data} />
        <div className="col-span-2 ">
          <h3>Average user rating:</h3>

          <Rating rating={data?.vote_average} />
        </div>
      </div>
      <div className=" md:col-span-3 lg:col-span-2 ">
        <h3 className="pb-1 text-lg">About movie</h3>
        <h4 className="text-gray-500 font-medium">{data?.overview}</h4>
      </div>
    </section>
  );
}
