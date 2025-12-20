import React, { useRef } from "react";

import { CircleStar } from "lucide-react";
export default function Rating({ rating }) {
  const stars = Math.floor(rating / 2);

  return (
    <section className="">
      {Array.from({ length: 5 }).map((_, index) => {
        const isFilled = index < stars;
        return (
          <button disabled className="pr-1" key={index}>
            <CircleStar
              className={isFilled ? "text-[#e6cc74]" : " text-[#afaaaa]"}
            />
          </button>
        );
      })}
    </section>
  );
}
