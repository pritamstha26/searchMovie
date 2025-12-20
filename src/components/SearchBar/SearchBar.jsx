import React, { useState } from "react";

export default function SearchBar({ keyword, handleChange }) {
  return (
    <input
      type="text"
      placeholder="Movies..."
      name="searchBar"
      value={keyword?.searchBar || ""}
      onChange={handleChange}
      className=" shadow-2xl border-gray-300 outline-none p-3 border hover:bg-gray-300 cursor-pointer rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
    />
  );
}
