import { FaRupeeSign } from "react-icons/fa";
import { PricingCard } from "./PricingCard";
import { ContainerDiv } from "./elements/Container";
const silver_glove = [
    {
        text: "Boxing training",
        checked: true,
    },
    {
        text: "Yoga practice",
        checked: false,
    },
    {
        text: "Body building",
        checked: false,
    },
]
const gold_glove = [
    {
        text: "Boxing training",
        checked: true,
    },
    {
        text: "Yoga practice",
        checked: true,
    },
    {
        text: "Body building",
        checked: false,
    },
]
const platinum_glove = [
    {
        text: "Boxing training",
        checked: true,
    },
    {
        text: "Yoga practice",
        checked: true,
    },
    {
        text: "Body building",
        checked: true,
    },
]
export function PricingsHome(){
    return(
        <section
            className="w-screen h-fit pt-20 py-10 bg-zinc-900 relative overflow-hidden z-0"
        >
            <div
                className="absolute left-0 text-[700px] -z-10 text-gray-600/10 top-1/2 -translate-y-1/2"
            ><FaRupeeSign/></div>
            <ContainerDiv className="bg-transparent h-full flex flex-col justify-center items-center gap-10 z-10">
                <h2 className="text-3xl font-bold uppercase italic">
                        PRICINGS <span className="bg-red-700/90">ARE</span> 
                    </h2>
                <div className="bg-transparent w-fit">
                        <div className="w-fit grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 xl:gap-10 ">
                        {/* Pricing Card */}
                        <PricingCard
                            title="Silver"
                            price={2200}
                            features={silver_glove}
                        />
                        <PricingCard
                            title="Gold"
                            price={3000}
                            features={gold_glove}
                        />
                        <PricingCard
                            title="Platinum"
                            price={5000}
                            features={platinum_glove}
                        />
                        </div>
                    </div>
            </ContainerDiv>


        </section>
    )
}