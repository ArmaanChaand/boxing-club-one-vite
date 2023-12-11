export function Experiences(){
    return(
        <section id="ABOUT" className="w-screen h-fit bg-zinc-950/70 relative z-0">
            <div className="absolute w-full h-1/2 bottom-0 bg-zinc-900 -z-20">

            </div>
            <div className="mx-auto sm:w-11/12 h-[400px] sm:h-[500px] flex flex-col justify-center items-center gap-10">
                <div className="w-full h-[250px] sm:h-2/3 relative flex justify-center items-center">
                <img 
                    className="w-full h-full object-cover absolute -z-10 rounded
                    brightness-50 "
                    src="/media/boxing-black.jpg" alt="Hero"/>
                    <h2 className="text-3xl text-center sm:text-5xl font-bold uppercase italic">
                        More than <span className="text-red-700 font-extrabold text-7xl">10</span>  years of experience <span className="font-serif">.</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}