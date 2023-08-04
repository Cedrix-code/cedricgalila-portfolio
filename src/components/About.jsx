import React, { useState, useEffect } from "react";
import { Tilt }  from "react-tilt";
import { motion } from "framer-motion";

import Lottie from "lottie-react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon}) => {
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
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className={`w-full p-[1px] rounded-[20px] shadow-card items-center ${
          isHovering && !isMobile || isMobile ? 'green-orange-gradient' : ''
        }`}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px] 
          flex justify-evenly items-center flex-col'
        >
          <div className="flex justify-center items-center mx-auto">
            <Lottie animationData={icon} />
          </div>
          <h3 className="text-white text-[20px]
          font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction & Summary</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={textVariant(0.3)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
        I'm a junior software engineer who got lost in the BPO jungle for a while. 
        I graduated with an IT degree in 2020, but the tech jobs were scarce back in my home province and I had to pay the bills somehow. 
        So I ended up talking to angry customers on the phone for a living. But I never gave up on my dream of coding cool stuff. 
        I kept learning Web Development and JavaScript and its awesome frameworks like React, Node.js, and Three.js. 
        I'm also good at solving problems and making customers happy. Well, at least the ones who don't yell at me. 
        I'm ready to switch back to software development and show you what I can do. 
        Let's say I'm more leaned towards Frontend as of this time, but I am constantly learning and eventually would delved deep into other 
        aspects of Software Development like Backend, DevOps, CI/CD, and so on. And hopefully by then I am confident with my Full-stack skills.
        I'll be happy dipping myself with other like-minded people who are already experienced in the field.
        I'm always eager to learn new things and grow as a developer. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
