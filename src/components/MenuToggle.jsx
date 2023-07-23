import React from "react";

import { navLinks } from "../constants";

const MobileMenuToggle = ({ toggle, setToggle, active, setActive }) => {

  return (
    
    <div className="lg:hidden flex flex-1 justify-end items-center mx-4 py-3">
    <button
      className="text-gray-500 relative focus:outline-none"
      onClick={() => setToggle(!toggle)}
    >
        <div className="absolute flex flex-col gap-1 content-center 
          w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            aria-hidden="true"
            className={`block h-0.5 ${toggle ? "w-8" : "w-6"} bg-gray-100 transform transition-all duration-500 ease-in-out ${
              toggle ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-0.5 bg-gray-100 transform transition duration-500 ease-in-out ${
              toggle ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-0.5 bg-gray-100 transform transition duration-500 ease-in-out ${
              toggle ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
    </button>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default MobileMenuToggle;