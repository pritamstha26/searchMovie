import React from "react";

export default function Card({ data, handleClick }) {
  return (
    <div
      onClick={() => handleClick(data)}
      className=" flex flex-col md:flex-row mx-auto  my-4 w-full max-w-4xl bg-[#222222] overflow-hidden text-white rounded-2xl"
    >
      <div className=" md:w-1/2 lg:w-2/5    ">
        <div className="aspect-2/3 relative overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt=""
            className=" h-full w-full inset-0 absolute object-cover"
          />
        </div>
      </div>
      <main className="md:text-center text-justify md:w-1/2 lg:w-3/5  flex flex-col justify-center items-center  p-4 md:p-16 ">
        <h1 className="uppercase font-mono font-bold text-3xl">
          {data?.original_title}
        </h1>
        <h3 className="text-gray-400 py-3 font-bold">{data?.overview}</h3>
        <h4 className="font-bold pb-3">
          Staring: <span className="text-[#5843a4] font-bold">Actors</span>
        </h4>
        <button className="px-4  py-2 bg-[#7d4bfc] hover:bg-[#551ae9] rounded-full text-white font-bold uppercase ">
          Watch now
        </button>
      </main>
    </div>
  );
}
