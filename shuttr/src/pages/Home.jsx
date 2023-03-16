import React from 'react'
import Blog from '../component/Blog/Blog'
import Discount from '../component/Discount/Discount'
import Hero from '../component/Hero/Hero'
import Instagram from '../component/Instagram/Instagram'
import Membership from '../component/Membership/Membership'
import NewArival from '../component/NewArival/NewArival'
import Savings from '../component/Savings/Savings'
import Services from '../component/Services/Services'
import Tranding from '../component/Tranding/Tranding'
import TrandingProduct from '../component/TrandingProduct/TrandingProduct'

function Home() {
  return (
      <div>
        
          <Hero />
          <Discount />
          <NewArival />
          <Savings />
          <Tranding />
          <TrandingProduct />
          <Services />
          <Blog />
          <Instagram />
          <Membership />
          
    </div>
  )
}

export default Home