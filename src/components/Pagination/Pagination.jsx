import React, { useState } from "react";

export default function Pagination({
  handlePageIncrement,
  handlePageDecrement,
}) {
  return (
    <div>
      <button onClick={handlePageDecrement}>decrement</button>

      <button onClick={handlePageIncrement}>increment</button>
    </div>
  );
}
