import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { motion, useScroll } from 'framer-motion';
import MobileMenuToggle from './MenuToggle';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const sectionRefs = useRef([]);
  const isScrollingFromLink = useRef(false);
  
  const navigate = useNavigate();

  const handleUrl = (url) => {
    navigate(url);
  };

  const handleClick = (url) => {
    isScrollingFromLink.current = true;
    setTimeout(() => {
      isScrollingFromLink.current = false;
    }, 50);
    handleUrl(`#${url}`); // Call the function to update the link
  };
  // Create refs for each section using the useInView hook
  const sectionsInView = navLinks.map((nav, index) => {
    const [ref, inView] = useInView({ threshold: 0.5 });
    sectionRefs.current[index] = ref;
    return { id: nav.id, inView };
  });

  useEffect(() => {
    if (!isScrollingFromLink.current) {
      const updateActiveLink = () => {
        for (const [index, section] of sectionsInView.entries()) {
          if (section.inView) {
            setActive(navLinks[index].title);
            break;
          }
        }
      };

      const timeoutId = setTimeout(updateActiveLink, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [sectionsInView]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 ${
        scrolled ? 'z-30 bg-primary backdrop-blur-sm bg-opacity-40' : 'z-30 bg-transparent'
      }`}
    >

      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          height: 7,
          background: '#E88C1F',
          transformOrigin: '0%',
          zIndex: 1,
        }}
      ></motion.div>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto select-none">
        <Link
          to="/home"
          spy={true}
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
            handleUrl('#home');
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 cursor-pointer object-contain" />
          <p className="text-white text-[18px] font-bold flex ">
            Cedric.Galila &nbsp;
            <span className="md:block hidden"> | Software Engineer</span>
          </p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-accent' : 'text-secondary'
                } hover:text-accent transition-colors text-[18px] font-medium cursor-pointer`}
              >
                <Link
                  to={nav.id}
                  spy={true}
                  offset={-50}
                  onSetActive={() => setActive(nav.title)} // Update active link onSetActive
                  onClick={() => handleClick(nav.id)}
                >
                  {nav.title}
                </Link>
              </li>

          ))}
        </ul>
        <MobileMenuToggle toggle={toggle} setToggle={setToggle} active={active} setActive={setActive} />
      </div>
    </nav>
  );
};

export default Navbar;
