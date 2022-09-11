import React from 'react'
import Carousal from '../../components/carousal'
import Footer from '../../components/footer'
import { Navbar } from '../../components/navbar'
import OurVision from '../../components/our-vision'
import WhyUs from '../../components/why-us'

const Home = () => {
  return (<>
     <Navbar/>
      <Carousal/>
      <OurVision/>
      <WhyUs/>
      <Footer/>
  </>

  )
}

export default Home