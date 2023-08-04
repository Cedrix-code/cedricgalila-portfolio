import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { slideIn } from "../utils/motion";

const MobileMenuToggle = ({ toggle, setToggle, active, setActive }) => {

  // Function to handle menu toggle click event
  const handleMenuToggle = () => {
    setToggle(!toggle);
  };

  // Add event listener to detect scroll and hide the menu toggle
  useEffect(() => {
    const handleScroll = () => {
      setToggle(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setToggle]);

  return (
    <div
      className="lg:hidden flex flex-1 justify-end items-center mx-4 py-3"
    >
      <button
        className="text-gray-500 relative focus:outline-none"
        onClick={handleMenuToggle}
      >
        <div
          className="absolute flex flex-col gap-1 content-center 
          w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
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
      <motion.div
        initial="hidden"
        animate={toggle ? "show" : "hidden"}
        variants={slideIn("down", "spring", 0.1, 1)}
        className={`${
          !toggle ? "hidden" : "flex"
        } absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <div className="w-full p-[1px] rounded-xl green-orange-gradient">
          <div className="w-full h-full p-6 justify-center rounded-xl bg-tertiary">
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-mono font-medium cursor-pointer pt-0 text-[16px] ${
                    active === nav.title ? "text-accent" : "text-secondary"
                  }`}
                  onClick={() => {
                    handleMenuToggle();
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileMenuToggle;
