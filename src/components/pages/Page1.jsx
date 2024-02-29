import React, { useState } from "react";
import Sidebar from "../Sidebar";

import Header from "../Header";
import "../../styles/page1.css";
import Cards from "../Cards";
const Page1 = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toogleShow = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="h-screen bg-gray-50 w-screen flex">
      <div className="h-20 bg-red-50 z-20 w-full fixed flex flex-wrap">
        <Header onClick={toogleShow} />
      </div>
      <div
        className={`sidebar z-10 h-full ${showSidebar ? "active" : ""} fixed`}
      >
        <Sidebar />
      </div>
      <div className="flex-1 flex justify-end pr-10">
        <div className="flex flex-col justify-center w-full items-end">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Page1;
