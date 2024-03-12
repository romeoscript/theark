import React from 'react'
import Carousel from './carousel'
import unlock from '../public/assets/unlock.svg'
import discover from '../public/assets/discover.svg'
import explore from '../public/assets/explore.svg'

const carouselItems = [
    {
        img: unlock.src,
        title: 'Unlock Real-Time DEX Insights',
        description: 'Uncover insightful data into Token movements with Token View. Gain access to dedicated pages for each Token, track Smart money movements, delve into Token holdings, view price charts, and analyze tables. Dive deep into the world of Tokens and make more informed decision with comprehensive insights at your fingertips.'
    },
    {
        img: discover.src,
        title: 'Unlock Real-Time DEX Insights',
        description: 'Within the project “The Ark Migration, mobilization of smart contract”, The Ark demonstrates a new way where newbies, business owners, entrepreneurs, change-makers and innovators worldwide can jiun forces to address local prob;les and collectively work towards resolving global challenges'
    },
    {
        img: explore.src,
        title: 'Unlock Real-Time DEX Insights',
        description: 'Uncover insightful data into Token movements with Token View. Gain access to dedicated pages for each Token, track Smart money movements, delve into Token holdings, view price charts, and analyze tables. Dive deep into the world of Tokens and make more informed decision with comprehensive insights at your fingertips.'
    }
]

const Stories = () => {
  return (
    <div className='text-black'>
      <div className='text-center'>
        <h2 className='text-bg text-2xl'>Real Stories, Real Successes</h2>
        <p className='mb-[3rem]'>Explore inspiring tales of success from someof our customers and partners</p>
        <Carousel items={carouselItems} />
      </div>
    </div>
  )
}

export default Stories
