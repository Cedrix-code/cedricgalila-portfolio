import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const TechCard = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-10">
      {technologies.map((technology, i) => (
        <motion.div
          key={technology.name}
          variants={fadeIn('up', 'spring', i * 0.1, 0.75)} // Add delay based on index
          className="w-28 h-28 relative mx-4 my-4 justify-center items-center"
        >
          <motion.img
            src={technology.icon}
            alt={technology.name}
            className="w-full h-full object-contain"
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={handleMouseLeave}
            initial={{ y: 0 }}
            animate={{ y: hoverIndex === i ? -30 : 0 }}
            transition="customtransition"
          />
          <motion.h1
            className={`text-secondary text-lg text-center ${
              hoverIndex === i ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: hoverIndex === i ? -15 : 20,
              opacity: hoverIndex === i ? 1 : 0,
            }}
            transition="customtransition"
          >
            {technology.name}
          </motion.h1>
        </motion.div>
      ))}
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What skills I currently have</p>
        <h2 className={styles.sectionHeadText}>Tech Stacks.</h2>
      </motion.div>
      <TechCard />
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
