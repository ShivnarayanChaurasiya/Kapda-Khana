
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnnouncementBar from "./components/AnnouncementBar";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";

function App() {


  return (
    <>
      
 <Navbar />
 <Hero/>
 <AnnouncementBar />
 <CategorySection/>
<ProductSection />
     
    </>
  )
}

export default App
