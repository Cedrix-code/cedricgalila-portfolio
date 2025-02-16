import { motion } from "framer-motion";
import { styles } from "../styles";
import { Lanyard } from "./canvas";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import Resume from "../assets/Lance_Cedric_Galila_SWE.pdf"
import ShinyText from './ShinyText';

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start gap-5 select-none`}
      >
        <div className='hidden md:flex flex-col justify-center items-center mt-5'>
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
        <div className="flex flex-col items-center sm:items-start">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={textVariant(0.3)}
            className='text-white flex items-center gap-4 text-3xl md:text-4xl lg:text-5xl'
          >
            <span className='text-[#E88C1F] drop-shadow'>
              <span className='block md:hidden'>Lance Cedric Galila</span>
              <br className='hidden sm:block'/>
              <span className='hidden md:block'>Lance Cedric Galila</span>
            </span>
          </motion.h1>
          <div>
          <motion.p
            initial="hidden"
            animate="show"
            variants={textVariant(0.5)}
            className={`${styles.heroSubText} mt-2 text-white-100 text-base md:text-lg lg:text-xl hidden md:block`}
          >
          Turning ideas into reality! <br className='xs:block hidden' />
            Mastering the art of learning at lightning speed. <br className='sm:block hidden' />
            Debugging one challenge at a time.
          </motion.p>
          </div>
          <div className="relative z-20">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <motion.button
                initial="hidden"
                animate="show"
                variants={slideIn("up", "tween", 0.1, 3)}
                className={`bg-tertiary backdrop-opacity-30 
                  backdrop-blur-sm bg-opacity-40 py-2 px-6 outline-none w-fit font-bold shadow-md rounded-full my-4
                  hover:bg-accent
                  border-accent hover:border-orange transition-colors border-2
                  md:py-3 md:px-8 md:w-fit`}
              >
                <ShinyText text="Download CV" disabled={false} speed={4} className='hover:text-orange'/>
              </motion.button>
            </a>
          </div>
        </div>
      </div>

      <Lanyard position={[0, 0, 13]} gravity={[0, -70, 0]}/>

      <div className='absolute xs:bottom-10 md:bottom-16lg:bottom-32 w-full flex justify-center items-center z-20 select-none'>
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