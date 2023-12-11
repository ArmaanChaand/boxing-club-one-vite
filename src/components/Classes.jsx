import { ClasesItem } from "./ClassesItem";
import { ContainerDiv } from "./elements/Container";

export function Classes(){
    return(
        <section id="CLASSES" className="w-screen h-fit bg-zinc-950/70  pt-24 sm:pt-20 py-20">
            <ContainerDiv className="h-fit flex flex-col justify-center items-center gap-10">
                <h2 className="text-3xl font-bold uppercase italic">
                    POPULAR <span className="bg-red-700/90">CLASSES</span> 
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3  md:w-9/12 h-fit gap-2">
                        <ClasesItem
                            src="/media/self-defence.jpg/"
                            title="Building"
                        />
                        <ClasesItem
                            src="/media/guru-one.jpg/"
                            title="Boxing"
                        />
                        <ClasesItem
                            src="/media/boxing-girl.jpg/"
                            title="Defence"
                        />
                </div>
                <blockquote className="text-xl italic font-semibold text-zinc-200">
  <svg
    className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 14"
  >
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
  </svg>
  <p className="text-center text-sm">
  "TAKE CARE OF YOUR BODY IT'S  IS  THE ONLY PLACE YOU HAVE TO LIVE .( IRON FIST ) IS THE PERFECT PLACE TOO SCULPT 
  <br/>
  YOUR BODY  WHAT YOUR LOOKING FOR TRAIN WITH HIGH QUALIFIED COUCHES ."
  </p>
</blockquote>
            </ContainerDiv>
        </section>
    )
}