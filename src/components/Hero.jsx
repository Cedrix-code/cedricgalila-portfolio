import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn,textVariant, zoomIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div 
            initial="hidden"
            animate="show"
            variants={zoomIn(1.5, 1)}
            className='w-5 h-5 rounded-full bg-[#E88C1F]' 
          />
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", 0.1, 3)}
            className='w-1 sm:h-80 h-40 orange-gradient' 
          />
        </div>
        <div>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={textVariant(0.3)}
            className={`${styles.heroHeadText} text-white`}
          >Hi, I'm <span className='text-[#E88C1F]'>Cedric
          </span></motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={textVariant(0.5)}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I develop user interfaces, <br className='sm:block hidden' />
            visuals and web applications
          </motion.p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;