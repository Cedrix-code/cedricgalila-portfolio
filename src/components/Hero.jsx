import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import Typewriter from "typewriter-effect";
import Resume from "../assets/LCGResume.pdf";

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 select-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div 
            initial="hidden"
            animate="show"
            variants={fadeIn("down", "spring", 1, 1)}
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
            className={`${styles.heroHeadText} text-white flex items-center gap-4`}
          >Hi, I'm <span className='text-[#E88C1F] drop-shadow'>
            <Typewriter
              options={{
                strings: ['Lance','Cedric','Galila'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span></motion.h1>
          <div>
          <motion.p
            initial="hidden"
            animate="show"
            variants={textVariant(0.5)}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            The web brought you here, finally! <br className='xs:block hidden' />
            Let's build ideas with code. <br className='sm:block hidden' />
            One line at a time.
          </motion.p>
          </div>
          <div className="relative z-20">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <motion.button
                initial="hidden"
                animate="show"
                variants={slideIn("up", "tween", 0.1, 3)}
                className={`bg-tertiary backdrop-opacity-30 
                  backdrop-blur-sm bg-opacity-40 py-2 px-6 outline-none w-fit
                  text-accent font-bold shadow-md rounded-xl my-4
                  hover:bg-accent hover:text-white 
                  border-accent transition-colors border-4
                  md:py-3 md:px-8 md:w-fit`}
              >
                Resume
              </motion.button>
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 select-none'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;