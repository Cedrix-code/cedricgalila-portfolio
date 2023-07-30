import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import { FaMouse } from 'react-icons/fa';

const Tech = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleHover = (event) => {
    setIsHovering(true);
    setHoverPosition({ x: event.clientX, y: event.clientY });
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    // Set a delay before closing the modal
    hoverTimeoutRef.current = setTimeout(() => {
      handleCloseModal();
    }, 500); // Adjust the delay duration (in milliseconds) as needed
  };
  // Function to open the modal when a technology is clicked
  const handleTechClick = (technology) => {
    setSelectedTech(technology);
    setIsHovering(false);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedTech(null);
    setIsHovering(false);
  };

  // Add event listener to detect scroll and close the modal
  useEffect(() => {
    const handleScroll = () => {
      handleCloseModal();
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What skills I currently have</p>
        <h2 className={styles.sectionHeadText}>Tech Stacks.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 cursor-pointer" 
            key={technology.name} 
            onMouseEnter={handleHover} // Handle hover event
            onMouseLeave={handleMouseLeave} // Handle mouse leave event
            onClick={() => handleTechClick(technology)}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      {isHovering && !selectedTech && (
        <div
          className="fixed"
          style={{
            top: hoverPosition.y - 60, // Adjust the positioning as needed
            left: hoverPosition.x,
          }}
        >
          <div
            className="rounded-lg bg-transparent block"
          >
            <h3 className="text-lg text-accent font-semibold flex items-center"><FaMouse /> &nbsp; Click Me!</h3>
          </div>
        </div>
      )}
      {selectedTech && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-black">
          <div className="bg-tertiary p-4 bg-clip-padding   
            backdrop-filter backdrop-blur-sm 
            bg-opacity-30 border-gray-100 
            rounded-lg w-64"
          >
            <h3 className="text-lg font-semibold">{selectedTech.name}</h3>
            <p className="text-sm mt-2">{selectedTech.description}</p>
            <button className="mt-4 bg-accent py-2 px-4 text-white rounded-lg" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
