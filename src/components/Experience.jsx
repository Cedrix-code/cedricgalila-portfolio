import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => (
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
      <h3 className="text-white text-[24px]
      font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px]
      font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px]
          pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have worked on</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
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