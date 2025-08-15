import { CommonPageWrapper } from '@/components/common/CommonPageWrapper'
import GetTravelDeal from '@/components/contact_components/GetTravelDeal'
import Banner from '@/components/home/homePage/Banner'
import ContactSection from '@/components/home/homePage/ContactSection'
import InternationalJourney from '@/components/home/homePage/InternationalJourney'
import LocalJourney from '@/components/home/homePage/LocalJourney'
import TestimonialsSlider from '@/components/home/homePage/TestimonialsSlider'
import { ImageAssets } from '@/utils/ImageProvider'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className=""
        style={{ backgroundImage: `url(${ImageAssets.particalBg})` }}
      >
        <CommonPageWrapper>
          <InternationalJourney />
          <LocalJourney />
          <TestimonialsSlider />
        </CommonPageWrapper>
      </div>

      <GetTravelDeal />
      <ContactSection />  
    </div>
  )
}

export default Home