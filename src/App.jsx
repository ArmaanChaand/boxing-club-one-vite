import './App.css'
import { AboutHome } from './components/AbutHome'
import { Classes } from './components/Classes'
import { ContactSection } from './components/ContactSection'
import { Experiences } from './components/Experiences'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PricingsHome } from './components/PricingsHome'
import { ScrollingGlove } from './components/ScrollingGlove'
import Home from './pages/home/Home'

function App() {
  
  return (
    <>  
      {/* <ScrollingGlove/> */}
      <Header/>
      <Home/>
      <Classes/>
      <Experiences/>
      <AboutHome/>
      <PricingsHome/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
