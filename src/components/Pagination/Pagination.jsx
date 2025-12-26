import React, { useState } from "react";

export default function Pagination({ searchResult }) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxItem = 5;
  const startIndex = (currentPage - 1) * maxItem;
  const endIndex = startIndex + maxItem;
  const currentItems = searchResult?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(searchResult / maxItem);
  return (
    <div>
      <ul>
        {currentItems?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
