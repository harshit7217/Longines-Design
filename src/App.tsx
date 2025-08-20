
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import History from './components/History.tsx'
import Video from './components/Video.tsx'
import HistoryTwo from './components/HistoryTwo.tsx'
import Watches from './components/Watches.tsx'
import Showing from './components/Showing.tsx'
import Shop from './components/Shop.tsx'
import DiscoverMore from  './components/DiscoverMore.tsx'
import Banner from './components/Banner.tsx'
import SubFooter from './components/SubFooter.tsx'
import Footer from './components/Footer.tsx'
import { useEffect, useState } from 'react'



function App() {

  const [length, setLength] = useState<number>( window.scrollY);

  useEffect(() => {
    const handleLength = () => {
      setLength(window.scrollY)
    };
    window.addEventListener("scroll", handleLength);
    return window.removeEventListener("Scroll", handleLength);
  }, []);

  return (
    <div className='m-0 p-0' >
      <Header scroll={length} />
      <Hero />
      <History />
      <Video />
      <HistoryTwo />
      <Watches />
      <Showing />
      <Shop />
      <DiscoverMore />
      <Banner />
      <SubFooter />
      <Footer />
    </div>
  )
}

export default App
