import { useEffect, useState } from 'react'
import { GiPunch } from "react-icons/gi";
export function ScrollingGlove(){
    const [glove_position, set_glove_position] = useState(0)
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            set_glove_position((350*scrolled)/100)
        };
    
        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []); // Empty dependency array ensures the effect runs once when component mounts
        
    
    return(
        <div className='opacity-50 fixed  right-2 sm:right-[unset] sm:left-5 h-[355px] w-[1px] bg-slate-400 z-50 -translate-y-1/2 top-1/2 flex justify-center items-start'>
        <span 
            className='transition-all'
            style={{transform: 'translateY(' + glove_position + 'px)'}}>
        <GiPunch/>
        </span>
      </div>
    )
}