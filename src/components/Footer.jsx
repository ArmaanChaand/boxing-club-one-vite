export function Footer(){
    return (
        <footer className="w-screen h-fit flex justify-center items-center relative overflow-hidden bg-zinc-950">
            <div className="rounded-lg shadow  m-4 w-full">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
    <a
        href="https://fight4fitness.netlify.app/"       
        className="uppercase font-extrabold text-xl sm:text-3xl italic relative w-fit h-fit z-0">
            <span   >
            Fight
            <br/> 
            Fitness
            </span>
        <span   className="absolute text-6xl sm:text-7xl -top-4 sm:-top-5 text-red-700 right-0 -z-10">
            4
        </span>
    </a>
      <ul className="flex flex-wrap items-center mt-6 sm:mt-0 mb-6 text-sm font-medium sm:mb-0 ">
        <li>
          <a href="#CLASSES" className="hover:underline me-4 md:me-6">
            Classes
          </a>
        </li>
        <li>
          <a href="#ABOUT" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#PRICINGS" className="hover:underline me-4 md:me-6">
            Pricings
          </a>
        </li>
        <li>
          <a href="#CONTACT" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="https://fight4fitness.netlify.app/" className="hover:underline">
        Fight4Fitness™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</div>

        </footer>
    )
}