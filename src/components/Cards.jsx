import React from "react";
import Card from "./Card";
const Cards = () => {
  return (
    <>
      <div className="flex justify-center pt-20 border rounded-xl border-blue-800 bg-white w-10/12 h-4/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
          <Card title="Temperatura" value={36.5} unit="°C" />
          <Card title="Ritmo Cardiaco" value={75} unit="bpm" />
          <Card title="Oxígeno en Sangre" value={98} unit="%" />
        </div>
      </div>
    </>
  );
};

export default Cards;
