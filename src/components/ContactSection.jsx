import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContainerDiv } from "./elements/Container";

export function ContactSection(){
    return(
        <section id="CONTACT" className="w-screen h-fit relative z-0 overflow-hidden py-16">
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
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.016110592649!2d77.6089284!3d13.0513227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b655b6af15%3A0x1854d7f528d9e973!2sIRON%20FIST%20FIGHT%20CLUB!5e0!3m2!1sen!2sin!4v1702316260602!5m2!1sen!2sin"
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
                            <a 
                                href="#"
                                target="_blank"
                                className="p-1 border-[1px] rounded-sm hover:text-red-700 transition-all hover:border-red-700"
                            >
                                <FaInstagram/>
                            </a>
                            <a 
                                href="#"
                                className="p-1 border-[1px] rounded-sm hover:text-red-700 transition-all hover:border-red-700"
                            >
                                <FaFacebook/>
                            </a>
                            <a 
                                href="https://api.whatsapp.com/send/?phone=%2B919902777669&text=Hello%20Charles,&type=phone_number&app_absent=0"
                                target="_blank"
                                className="p-1 border-[1px] rounded-sm hover:text-red-700 transition-all hover:border-red-700"
                            >
                                <FaWhatsapp/>
                            </a>
                        </div>
                        <h6 className="text-lg font-semibold mt-5">
                                Email us
                        </h6>
                        <a href="mailto:charles.fitness76@gmail.com" className="hover:underline">charles.fitness76@gmail.com</a>
                        <h6 className="text-lg font-semibold mt-5">
                                Call us
                        </h6>
                        <a href="tel:+919902777669" className="hover:underline">+919902777669</a>
                        <h6 className="text-lg font-semibold mt-5">
                               We are at
                        </h6>
                        <a href="https://www.google.com/maps/dir//IRON+FIST+FIGHT+CLUB,+DS-MAX+Marvel+Shine,+36A,1st+cross+Kaveri+layout+Near+Kalveri+Betta+Church,+oposit,+appartment,+opposite+Marvel+shine+appartment,+Marianna+palya,+Hebbal+Kempapura,+Bengaluru,+Karnataka+560024/@13.0513227,77.6089284,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae17b655b6af15:0x1854d7f528d9e973!2m2!1d77.6089284!2d13.0513227?entry=ttu" target="_blank" className="hover:underline">
                        36A, 1st Cross Kaveri Layout, 
                        Marianna palya, <br/>
                        Hebbal, Kempapura, Bengaluru, Karnataka 560024
                        </a>
                    </div>
                </div>
            </ContainerDiv>
        </section>
    )
}