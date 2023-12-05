import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const deadline = new Date('December 6, 2023 02:15:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = deadline - now;

    if (difference <= 0) {
      // Countdown is over
      return { hours: '00', minutes: '00', seconds: '00' };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  }


  return (
    <>
      <div className='w-full h-screen flex justify-center items-center flex-col'>
        <p className='text-sm font-semibold'>Your website will be ready in</p>
        {/* <h2 className='font-extrabold text-6xl sm:text-8xl'>12:00:00</h2> */}
        <h2 className='font-extrabold text-6xl sm:text-8xl'>{timeRemaining?.hours}:{timeRemaining?.minutes}:{timeRemaining?.seconds}</h2>

        <h3 className='text-lg uppercase font-semibold mt-4'>Banglore Boxing Club</h3>
      </div>
    </>
  )
}

export default App
