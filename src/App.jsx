import './App.css'
import { AboutHome } from './components/AboutHome'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PricingsHome } from './components/PricingsHome'
import Home from './pages/home/Home'

function App() {
  
  
  return (
    <>
      <Header/>
      <Home/>
      <AboutHome/>
      <PricingsHome/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
