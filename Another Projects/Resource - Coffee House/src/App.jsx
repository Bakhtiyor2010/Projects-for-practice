import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import About from './components/About'
import Download from './components/Download'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Download />
      <Footer />
    </div>
  )
}

export default App
