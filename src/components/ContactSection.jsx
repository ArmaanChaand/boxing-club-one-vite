import { FaFacebook, FaInstagram } from "react-icons/fa";
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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2153402644967!2d77.63465557401584!3d13.021954613774431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17906931b829%3A0x60771472df9cad18!2sFight%20For%20Fitness!5e0!3m2!1sen!2sin!4v1702211234413!5m2!1sen!2sin"
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
                        </div>
                        <h6 className="text-lg font-semibold mt-5">
                                Email us
                        </h6>
                        <a href="mailto:armaan.chaand17@gmail.com" className="hover:underline">armaan.chaand17@gmail.com</a>
                        <h6 className="text-lg font-semibold mt-5">
                                Call us
                        </h6>
                        <a href="tel:+9107996637020" className="hover:underline">07996637020</a>
                        <h6 className="text-lg font-semibold mt-5">
                               We are at
                        </h6>
                        <a href="https://www.google.com/maps/dir//No.4%2F1,+3rd+Floor,+Fight+For+Fitness,+above+Inmark,+opp.+Kammanahalli+Main+Road,+Jal+Vayu+Vihar,+Kacharakanahalli,+Bengaluru,+Karnataka+560084/@13.0219546,77.6346556,17z/data=!3m1!5s0x3bae10d395d307b9:0x22ceaf818342f90c!4m8!4m7!1m0!1m5!1m1!1s0x3bae17906931b829:0x60771472df9cad18!2m2!1d77.6372305!2d13.0219494?entry=ttu" target="_blank" className="hover:underline">
                        No.4/1, 3rd Floor, above Inmark, opp. Kammanahalli Main Road, <br/> Jal Vayu Vihar, Kacharakanahalli, Bengaluru, Karnataka 560084
                        </a>
                    </div>
                </div>
            </ContainerDiv>
        </section>
    )
}