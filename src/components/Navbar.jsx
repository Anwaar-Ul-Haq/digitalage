import React from "react";
import { NAVBAR_ITEMS } from "../constants";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex gap-14 justify-center text-white text-lg font-medium px-4 lg:pr-[100px] py-3">
        {NAVBAR_ITEMS.map((item) => (
          <Link to={item.url} className="link hover:underline tex">
            {item.title}
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
