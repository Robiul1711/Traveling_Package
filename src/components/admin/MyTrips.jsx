import { tripsData } from '@/utils/data'
import React from 'react'
import DashboardTripCard from './DashboardTripCard'

const MyTrips = () => {
  return (
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           <DashboardTripCard tripsData={tripsData} />
         </div>
  )
}

export default MyTrips