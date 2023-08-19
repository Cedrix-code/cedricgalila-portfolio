import React, { useState, useEffect, useRef } from "react";
import { Tilt }  from "react-tilt";
import { motion, useTransform, useScroll } from "framer-motion";

import Lottie from "lottie-react";

import { styles } from "../styles";
import { github, sitelink } from '../assets';
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenWidth();

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return isMobile;
};

const ProjectCard = ({ index, name, description, tags, img, source_code_link, site_link }) => {
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useMobileDetection();

  const handleHover = () => {
    if (!isMobile) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false);
    }
  };

  return (
    <Tilt options={{ 
      max: 45, 
      scale: 1, 
      speed: 450 
    }} className="sm:w-[360px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className={`w-full p-[1px] items-center rounded-2xl ${isHovering && 
        !isMobile || isMobile ? 'green-orange-gradient' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className='bg-tertiary rounded-2xl py-4 px-4 min-h-[280px] 
        flex justify-evenly flex-col'>
          <div className="relative w-full h-[230px]">
            {img.indev ? (
              <div className="w-64 h-64 flex justify-center items-center mx-auto">
                <Lottie animationData={img.indev} />
              </div>
            ) : (
              <img src={img} alt={name} className="w-full h-full object-cover rounded-2xl" />
            )}
            <div className="absolute flex gap-2 inset-0 justify-end m-3 card-img_hover">
              {site_link ? (
                <>
                  <div onClick={() => window.open(site_link, "_blank")} className="bg-primary backdrop-blur-sm bg-opacity-70 hover:bg-accent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img src={sitelink} alt="github" className="w-1/2 h-1/2 object-contain" />
                  </div>
                  <div onClick={() => window.open(source_code_link, "_blank")} className="bg-primary backdrop-blur-sm bg-opacity-70 hover:bg-accent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                  </div>
                </>
              ) : (
                <div onClick={() => window.open(source_code_link, "_blank")} className="bg-primary backdrop-blur-sm bg-opacity-70 hover:bg-accent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                </div>
              )}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const CardCarouselControl = () => {
  const isMobile = useMobileDetection();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
      <section ref={!isMobile ? targetRef : null} className={!isMobile ? 'relative -my-10 h-[300vh] bg-transparent' : null}>
        <div className={!isMobile ? 'sticky top-0 flex h-screen items-center overflow-x-visible' : null}>
          <motion.div style={!isMobile ? { x } : null} className={`flex gap-7 ${!isMobile ? '' : 'mt-10 flex-wrap justify-center'}`}>
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

const Works = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Works and Side Projects
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <CardCarouselControl />
    </>
  );
};

export default SectionWrapper(Works, "projects");