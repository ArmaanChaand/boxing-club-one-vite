import { ContainerDiv } from "./elements/Container";
import { FaDumbbell } from "react-icons/fa6";
export function AboutHome(){
    return(
        <section className="w-screen h-fit bg-zinc-900 pb-20 relative">
            
            <ContainerDiv>
            <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center  text-white md:text-4xl">You'll be in good company</h2>
                <p 
                    className="text-base text-center w-full sm:w-9/12 mx-auto"    
                >
                    Empower yourself with personalized online self-defense sessions for men, women, and kids. Elevate your fitness through expert-guided boxing, functional training, and innovative beast flow sessions.</p>
            </ContainerDiv>

        </section>
    )
}