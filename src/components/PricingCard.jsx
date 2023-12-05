function PriceCheckpoint({text="", checked=true}){
    return(
        <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                className="flex-shrink-0 w-5 h-5"
                fill={checked ? "rgb(34 197 94)" : "rgb(55 65 81)"}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
                </svg>
                <span>{text}</span>
            </li>
    )
}
export function PricingCard({
    title,para, features=[], price, renew="month", 
}){
    return(
        <div className="flex flex-col w-fit p-6 mx-auto text-center rounded-lg border shadow xl:p-8 col-span-1">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">₹{price}</span>
            <span className="text-gray-500 dark:text-gray-400">/{renew}</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
                {
                    features?.map(feature => (
                        <PriceCheckpoint
                            key={feature?.text}
                            text={feature?.text}
                            checked={feature?.checked}
                        />
                    ))
                }
            
            </ul>
        </div>
    )
}