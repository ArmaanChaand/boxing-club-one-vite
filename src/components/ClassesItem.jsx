export function ClasesItem({src="", title=""}){
    return(
        <div className="col-span-1 w-full flex-none aspect-square overflow-hidden relative">
            <img src={src} alt={title}
                className="object-cover w-full h-full z-0 saturate-50 hover:scale-105 transition-all"
            />
            <h3 className="text-3xl font-bold absolute bottom-0 w-full text-center py-5 uppercase z-10
            bg-red-700/90 italic">
                    {title}
            </h3>
        </div>
    )
}