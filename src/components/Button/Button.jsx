import React from "react";

export default function Button({ type, label }) {
  return (
    <button
      type={type}
      className="bg-black text-white font-bold capitalize  py-3 rounded-2xl px-4 "
    >
      {label}
    </button>
  );
}
