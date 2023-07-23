import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

import {motion, useScroll} from 'framer-motion';
 
import MobileMenuToggle from "./MenuToggle";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {scrollYProgress} = useScroll();


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
    <motion.div
			style={{
				scaleX: scrollYProgress,
				position: "fixed",
				top: 0,
				right: 0,
				left: 0,
				height: 7,
				background: "#E88C1F",
				transformOrigin: "0%",
				zIndex: 1
			}}
		>
		</motion.div>
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

        <ul className="list-none hidden lg:flex flex-row gap-10">
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
          <MobileMenuToggle 
            toggle={toggle} 
            setToggle={setToggle}
            active={active}
            setActive={setActive} 
          />
      </div>
    </nav>
  );
};

export default Navbar;