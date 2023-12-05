import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ContainerDiv } from "./elements/Container";

export function ContactSection(){
    return(
        <section className="w-screen h-fit relative z-0 overflow-hidden py-16">
            <div 
                className="bg-red-700/90 absolute -z-20 
                w-1/2 h-[200%] -top-1/4 -left-[45%] sm:-left-1/3  rotate-12"></div>
            <ContainerDiv className="flex flex-col justify-center items-center gap-10">
                 <h2 className="text-3xl font-bold uppercase italic">
                    FIND US <span className="bg-red-700/90">FROM</span> 
                </h2>
                <div className="w-full flex flex-col gap-10 sm:flex-row justify-evenly items-start ">

                    <div className="w-full sm:w-[40%] h-fit border rounded overflow-hidden flex-none">
                    <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.919670853313!2d77.62035700000001!3d13.040785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172e832cf20f%3A0x1c029cf56955f8fa!2sBangalore%20Boxing%20Club!5e0!3m2!1sen!2sin!4v1701806297116!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


                    </div>
                    <div className="mx-auto flex flex-col gap-0 justify-center items-center text-center sm:text-start sm:items-start">
                        <h6 className="text-lg font-semibold 
                        ">
                                Our socials
                        </h6>
                        <div className="flex justify-center items-center gap-1 mt-1">
                            <a href="https://www.instagram.com/bangaloreboxingclub/" 
                                target="_blank"
                                className="p-1 border-[1px] rounded-sm hover:text-red-700 transition-all hover:border-red-700"
                            >
                                <FaInstagram/>
                            </a>
                            <a href="https://www.instagram.com/bangaloreboxingclub/" 
                                className="p-1 border-[1px] rounded-sm hover:text-red-700 transition-all hover:border-red-700"
                            >
                                <FaFacebook/>
                            </a>
                        </div>
                        <h6 className="text-lg font-semibold mt-5">
                                Email us
                        </h6>
                        <a href="mailto:armaan.chaand17@gmail.com" className="hover:underline">armaan.chaand17@gmail.com</a>
                        <h6 className="text-lg font-semibold mt-5">
                                Call us
                        </h6>
                        <a href="tel:+919742221403" className="hover:underline">+91 97422 21403</a>
                        <h6 className="text-lg font-semibold mt-5">
                               We are at
                        </h6>
                        <a href="tel:+919742221403" className="hover:underline">
                        NAGAWARA, HOODI & Marathahalli, Bangalore, India
                        </a>
                    </div>
                </div>
            </ContainerDiv>
        </section>
    )
}