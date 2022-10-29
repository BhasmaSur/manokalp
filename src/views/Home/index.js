import React from 'react'
import Carousal from '../../components/carousal'
import Footer from '../../components/footer'
import HomeAbout from '../../components/home-about'
import { Navbar } from '../../components/navbar'
import ProductsServices from '../../components/our-products-services'
import OurVision from '../../components/our-vision'
import WhyUs from '../../components/why-us'
import Testimonials from '../Testimonials'

const Home = () => {
  return (<>
     <Navbar/>
      <HomeAbout/>
      {/* <Carousal/> */}    
      <OurVision/>
      <ProductsServices/>
      <WhyUs/>
      <Testimonials/>
      <Footer/>
  </>

  )
}

export default Home