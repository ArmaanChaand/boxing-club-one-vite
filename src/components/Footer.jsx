export function Footer(){
    return (
        <footer className="w-screen h-56 sm:h-96 flex justify-center items-center relative overflow-hidden">
             <img 
                className="w-full h-full absolute object-cover -z-10
                brightness-50 "
                src="/media/boxing-black.jpg" alt="Hero"/>
                 <h2 className="text-5xl font-bold uppercase italic">
                    SEE YA <span className="bg-red-700/90">AGAIN!</span> 
                </h2>
        </footer>
    )
}