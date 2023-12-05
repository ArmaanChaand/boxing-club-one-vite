import { transform, useAnimation, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GiPunch } from "react-icons/gi";
export function ProgressLine({}){
    
    const [translateY, set_translateY] = useState(0);
    const [height, set_height] = useState(1)
  
    useEffect(() => {

      const handleScroll = () => {
        const height = document.getElementById("root").getBoundingClientRect().height
        const scrollY = window.scrollY
        set_translateY((scrollY/height)*100)
      };

  
      window.addEventListener('scroll', handleScroll);
      console.log(translateY)
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [translateY]);
    return (
        <div className="fixed right-3 sm:right-[unset] sm:left-5 top-1/2 
            -translate-y-1/2 z-0 overflow-hidden h-fit w-3 flex justify-center items-center
        ">
            <div 
                className="h-[60vh] sm:h-[70vh] w-[1px] bg-slate-400 
                flex flex-col justify-center items-center 
                before:w-2 before:absolute before:h-[1px] before:top-0 before:bg-slate-400
                after:w-2 after:absolute after:h-[1px] after:bottom-0 after:bg-slate-400
                "
                
            >
                <span
                    className="text-red-600 mb-auto transition-all"
                    style={{
                        transform:`translateY(${translateY}%)`
                    }}
                >
                    <GiPunch/>
                </span>
            </div>
        </div>
    )
}