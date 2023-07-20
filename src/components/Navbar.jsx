import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

import MobileMenuToggle from "./MenuToggle";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary backdrop-blur-sm bg-opacity-40" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Cedric.Galila &nbsp;
            <span className="md:block hidden"> | Software Engineer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center py-3">
          {/* <button
            className="text-gray-500 relative mx-6 focus:outline-none"
            onClick={() => setToggle(!toggle)}
          >
            <div className="block absolute grid grid-cols-1 gap-1 content-center w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
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
          </button> */}
          <MobileMenuToggle toggle={toggle} setToggle={setToggle} />
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
      </div>
    </nav>
  );
};

export default Navbar;