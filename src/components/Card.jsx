import React from "react";

const Card = ({ title, value, unit }) => {
  return (
    <>
      <div className="max-w-xl border border-blue-800 h-32 rounded overflow-hidden shadow-lg bg-white">
        <div className="px-20 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {value} {unit}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
