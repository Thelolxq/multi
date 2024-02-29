import React, { useState } from "react";

const sidebar = () => {
  const [show, setShow] = useState('Inicio');

  const handleShow = (option) => {
    setShow(option);
  };
  return (
    <>
      <aside className="h-full bg-white w-72 border-r border-blue-900">
        <div className="flex items-end pb-2 pl-10  h-1/6">
          <h2 className="text-gray-400 text-sm font-medium">Menu</h2>
        </div>
        <div>
          <ul className="flex flex-col w-full gap-5">
            <li
              onClick={() => handleShow("Inicio")}
              className={`w-full h-10 pl-5 font-medium flex items-center cursor-pointer hover:shadow hover:scale-y-110 hover:bg-blue-300 duration-200 ${
                show === "Inicio" ? "bg-blue-300" : ""
              }`}
            >
              Inicio
            </li>
            <li
              onClick={() => handleShow("Seguimientos")}
              className={`w-full h-10 pl-5 font-medium flex items-center cursor-pointer hover:shadow hover:scale-y-110 hover:bg-blue-300 duration-200 ${
                show === "Seguimientos" ? "bg-blue-300" : ""
              }`}
            >
              Seguimientos
            </li>
            <li
              onClick={() => handleShow("Pacientes")}
              className={`w-full h-10 pl-5 font-medium flex items-center cursor-pointer hover:shadow hover:scale-y-110 hover:bg-blue-300 duration-200 ${
                show === "Pacientes" ? "bg-blue-300" : ""
              }`}
            >
              Pacientes
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default sidebar;
