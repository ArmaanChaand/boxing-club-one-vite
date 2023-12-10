import { ContainerDiv } from "./elements/Container";
import { RiMenu4Fill } from "react-icons/ri";

export function Header(){
    return(
        <header className="fixed top-0 w-full py-3 z-50  shadow">
            <ContainerDiv className="flex justify-between items-center">
                {/* <div className="text-sm bg-zinc-900 px-2 py-1 font-semibold border-[1px] w-fit  flex justify-center items-center">
                    BB <span className="text-red-700 font-extrabold">C</span>
                </div> */}
                <span></span>
                <button onClick={()=>alert("This is a SAMPLE website.")} className="sm:hidden text-lg">
                    <RiMenu4Fill/>
                </button>
                <nav className="text-sm font-semibold hidden sm:flex capitalize justify-center items-center gap-5 ">
                    <a href="#CLASSES" className="hover:underline">
                        Classes
                    </a>
                    <a href="#ABOUT" className="hover:underline">
                        About
                    </a>
                    <a href="#PRICINGS" className="hover:underline">
                        Pricings
                    </a>
                    <a href="#CONTACT" className="hover:underline">
                        Contact
                    </a>
                </nav>    
            </ContainerDiv>
        </header>
    )
}