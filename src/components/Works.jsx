import React, { useState, useEffect } from "react"
import { Tilt }  from 'react-tilt';
import { motion } from 'framer-motion';

import Lottie from 'lottie-react';

import { styles } from '../styles';
import { github, sitelink } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, 
  tags, img, source_code_link, site_link}) => {
    const [isMobile, setIsMobile] = useState(false);

    // Check screen width on component mount and update the state
    useEffect(() => {
      const updateScreenWidth = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      updateScreenWidth();
  
      // Add event listener to detect screen width changes
      window.addEventListener('resize', updateScreenWidth);
  
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener('resize', updateScreenWidth);
      };
    }, []);
  
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
  
    const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div variants={fadeIn("up", "spring",
      index * 0.3, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="sm:w-[360px] w-full"
      >
        <motion.div className={`w-full p-[1px] items-center rounded-2xl ${
            isHovering && !isMobile || isMobile ? 'green-orange-gradient' : ''
          }`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleMouseLeave}
        >
        <div
          className='bg-tertiary rounded-2xl 
          py-4 px-4 min-h-[280px] 
          flex justify-evenly flex-col'
        >
        <div className="relative w-full h-[230px]">
        {img.indev ? (
            <div className="w-64 h-64 flex justify-center items-center mx-auto">
              <Lottie animationData={img.indev} />
            </div>
          ) : (
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
          <div className="absolute flex gap-2 inset-0 flex
          justify-end m-3 card-img_hover">
            {site_link ? (
              <>
              <div
                onClick={() => window.open(site_link, "_blank")}
                className="bg-primary backdrop-blur-sm 
                bg-opacity-70 hover:bg-accent w-10 h-10 
                rounded-full flex justify-center 
                items-center cursor-pointer"
              >
                <img 
                  src={sitelink}
                  alt="github"
                  className="w-1/2 
                  h-1/2 
                  object-contain"
                />
              </div>
              <div
                onClick={() => window.open
                (source_code_link, "_blank")}
                className="bg-primary backdrop-blur-sm 
                bg-opacity-70 hover:bg-accent w-10 h-10
                rounded-full flex justify-center
                items-center cursor-pointer"
              >
                <img 
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2
                  object-contain"
                />
              </div>
              </>
              ) : (
              <div
                onClick={() => window.open
                (source_code_link, "_blank")}
                className="bg-primary backdrop-blur-sm 
                bg-opacity-70 hover:bg-accent w-10 h-10
                rounded-full flex justify-center
                items-center cursor-pointer"
              >
                <img 
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2
                  object-contain"
                />
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
    </motion.div>
  )
}

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

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]
          mas-w-3xl leadiing-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. 
        </motion.p>
      </div> */}

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");