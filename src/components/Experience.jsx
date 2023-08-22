import { useEffect, useState } from "react";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => { 
  const specificExperience = experience.id === 4 ? experiences.find((exp) => exp.id === 4) : null;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.screen.width <= 768);
    };

    updateScreenWidth();

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);
  
  // Split the title into separate words or strings
  const titleWords = specificExperience ? specificExperience.title : [];

  useEffect(() => {
    if (experience.id === 4) {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % titleWords.length);
      }, titleWords.length * 800); // Change the time here to control the delay between loops.

      return () => clearInterval(interval);
    }
  }, [experience.id, titleWords.length]);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#2e373e', color:'#fff', boxShadow: '0 4px 0 0 #E88C1F' }}
      contentArrowStyle={{ borderRight: '7px solid #2e373e' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, boxShadow: '0 0 0 4px #E88C1F'}}
      icon={
        <div className="flex justify-center
        items-center w-full h-full">
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%]
            object-contain"
          />
        </div>
      }
    >
      <div>
        {experience.id === 4 ? (
          <h3 className={`text-white font-bold text-${isMobile ? '[20px]' : '[24px]'}`}>
            <Typewriter
              options={{
                strings: [titleWords[currentWordIndex]],
                autoStart: true,
                loop: false,
                delay: 20,
              }}
            />
          </h3>
        ) : (
          <h3 className={`text-white font-bold text-${isMobile ? '[20px]' : '[24px]'}`}>{experience.title}</h3>
        )}
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
        
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className={`text-white-100 pl-1 tracking-wider text-[12px] ${isMobile ? '' : 'text-[14px]'}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)};

const Experience = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have studied and job history</p>
        <h2 className={styles.sectionHeadText}>Education | Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#E88C1F">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience=
            {experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");