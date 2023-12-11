import { ContainerDiv } from "./elements/Container";

export function PricingsHome(){
    return(
        <section
            id="PRICINGS"
            className="w-screen h-screen bg-zinc-950 relative overflow-hidden z-0"
        >
            <div className="w-full -z-10 brightness-50 sm:brightness-75 sm:w-1/2  h-full bg-zinc-950/90 absolute right-0">
                <img src="/media/boxing-back.jpg" alt="Boxing"
                    className="w-full h-full object-cover"
                />
            </div>
            <ContainerDiv className="bg-transparent h-full flex flex-row justify-start items-center gap-10 z-10">
                <div className="flex flex-col justify-center items-center text-center gap-5">
                    <h3 className="text-5xl font-extrabold capitalize">
                        No matter  <br/> where you start
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-1">
                        <li className="rounded-sm bg-white text-zinc-950 flex justify-center items-center text-sm gap-1 p-1 font-semibold capitalize">
                        Self Defence  
                        </li>
                        <li className="rounded-sm bg-white text-zinc-950 flex justify-center items-center text-sm p-1 gap-1 font-semibold capitalize">
                         Crossfit
                        </li>
                        <li className="rounded-sm bg-white text-zinc-950 flex justify-center items-center text-sm p-1 gap-1 font-semibold capitalize">
                         Kickboxing
                        </li>
                        <li className="rounded-sm bg-white text-zinc-950 flex justify-center items-center text-sm p-1 gap-1 font-semibold capitalize">
                         Jiu Jitsu
                        </li>
                    </ul>
                    <h2 className="text-6xl font-extrabold">
                        <span className="text-red-700">₹</span>1500/M
                    </h2>
                    <button onClick={()=>alert("This is SAMPLE website.")} className="text-base py-2 px-5 border hover:bg-red-700 transition-colors">
                        JOIN NOW
                    </button>
                </div>
            </ContainerDiv>

        </section>
    )
}