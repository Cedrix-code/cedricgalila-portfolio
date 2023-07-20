import React from 'react';
import { Tilt }  from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient 
        p-[1px] rounded-[20px] shadow-card items-center'
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
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain" />
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
        Results-driven junior software engineer with 
        a unique background in the BPO customer 
        service industry. Transitioning to a career in 
        software development, bringing strong problem-solving 
        skills and a customer-centric approach. 
        Skilled in JavaScript, and knowledgeable in frameworks like
        React, Node.js, and Three.js. I'm a quick learner and communicates
        well to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Committed to continuous 
        learning and professional growth in software development. Let's work together and get your ideas to life.
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