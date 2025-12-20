import React from "react";

export default function Hero({ data }) {
  return (
    <section className="relative  h-[50vh] sm:h-[60vh] md:h-[70vh]  w-full overflow-hidden">
      <div className="h-full w-full  ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt=""
          className=" h-full  w-full    object-cover "
        />
      </div>
      <div className="absolute bottom-5 left-12 p-4    hidden md:block  ">
        <h3 className="text-[#a8b0ab]  font-bold text-xl">
          {data?.release_date}
        </h3>
        <h2 className="text-white font-bold text-4xl py-2">{data?.title}</h2>
        <div className=" ">
          <ul className="  flex  list-disc list-inside text-[#a8b0ab] font-bold  ">
            {data?.genres?.map((genre) => {
              return (
                <li key={genre?.id} className=" mr-1">
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
