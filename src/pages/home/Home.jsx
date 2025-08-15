import { CommonPageWrapper } from '@/components/common/CommonPageWrapper'
import Banner from '@/components/home/homePage/Banner'
import InternationalJourney from '@/components/home/homePage/InternationalJourney'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <CommonPageWrapper>
        <InternationalJourney />
      </CommonPageWrapper>
    </div>
  )
}

export default Home