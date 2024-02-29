import React from "react";
import Notificacion from "../assets/notificacion.png";
import Usuario from "../assets/usuario.png";
import Menu from "../assets/menu.png";
const Header = ({onClick}) => {
  return (
    <>
      <header className="border-b bg-white border-blue-900 w-full pl-10">
        <div className="flex w-full  items-center h-full justify-between flex-wrap">
        <div className=" top-5 bottom-14 left-10">
          <button onClick={onClick}>
            <img className="w-8" src={Menu} alt="" />
          </button>
        </div>
          <div>
            <input
              className="pl-2 w-60 border border-blue-800 h-8 rounded-xl"
              type="text"
              placeholder="Buscar"
            />
          </div>
          <div className="flex items-center gap-5 w-1/4">
            <img className="w-5 h-5" src={Notificacion} alt="" />
            <img
              className="w-7 rounded-full h-7 p-1 bg-blue-400"
              src={Usuario}
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
