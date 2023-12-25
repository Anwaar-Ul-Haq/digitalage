import React from "react";
import Navbar from "./Navbar";

const Header = ({ bgImage, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="header-layout bg-no-repeat bg-center bg-cover h-[50vh]"
    >
      <div className="relative z-10">
        <Navbar />
        <div className="flex justify-center items-center h-[38vh]">
          <h1 className="text-white text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
