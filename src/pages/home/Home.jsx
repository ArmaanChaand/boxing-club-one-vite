import { ContainerDiv } from "../../components/elements/Container";
import { motion } from "framer-motion";
export default function Home({}){
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    return (
        <motion.section 
            className="w-screen h-screen relative test-texture overflow-hidden"
            variants={container}
            initial="hidden"
            animate="visible"

        >
            <motion.img 
                className="w-fit h-auto absolute object-contain object-center sm:right-20 bottom-0 -z-10
                brightness-75 sm:brightness-50 md:brightness-75"
                src="/media/boxer.png" alt="Hero"
                variants={item}

            />
            <div 
                className="w-[200%] h-1/2 sm:h-[200%]  sm:w-1/2  bg-red-700/90 absolute -z-20 
                rotate-12 -bottom-[10%] sm:bottom-[unset] -left-1/2 sm:left-[unset] sm:-top-1/2 sm:-right-[10%]"></div>
            <ContainerDiv className="h-full flex justify-center items-start sm:items-center">
                <div className="mt-16 sm:mt-[unset] mr-auto ">
                    <motion.small variants={item} className="font-Lobster ">Gym & Boxing</motion.small>
                    <h1 
                        
                        className="uppercase font-extrabold text-5xl sm:text-8xl italic relative w-fit h-fit z-0">
                            <motion.span variants={item}  >
                            Fight
                            <br/> 
                            Fitness
                            </motion.span>
                        <motion.span variants={item}  className="absolute text-9xl sm:text-[15rem] -top-8 sm:-top-10 text-red-700 right-0 -z-10">
                            4
                        </motion.span>
                    </h1>
                    <motion.p className="w-11/12 sm:w-2/3 text-sm text-justify my-5 sm:my-8" 
                        variants={item}
                    >
                        Unleash your potential in the ring. Join our boxing club for fitness, skill, and an unbeatable sense of community.
                    </motion.p>
                    <motion.a  
                        variants={item}
                    href="#" className="border p-2 rounded-sm underline-offset-2 text-sm hover:bg-red-700 transition-all">
                        BOOK AN APPOINTMENT
                    </motion.a>
                </div>
            </ContainerDiv>
        </motion.section>
    )
}