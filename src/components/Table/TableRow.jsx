import React from "react";

export default function TableRow({ details, index }) {
  return (
    <tr className=" " key={index}>
      <td className="font-bold py-1 ">{details.label}</td>
      <td className="text-gray-500 font-medium">{details.value}</td>
    </tr>
  );
}
