import React from 'react'
import unlock from '../public/assets/unlock.svg'
import discover from '../public/assets/discover.svg'
import explore from '../public/assets/explore.svg'

const Offer = () => {
    return (
        <div className='p-[2rem] text-black'>
            <div className='text-center my-[2rem]'>
                <h2 className='text-bg my-[1rem] capitalize text-2xl'>what we offer</h2>
                <p>Looking to explore, learn about the diverse approach of crypto trading. The Ark provides a conducive platform to ease learning</p>

            </div>
            <figure className='md:flex gap-[2%] grid p-[1rem] my-[1rem] items-center animate-in fade-in zoom-in'>
                <aside className='basis-[59%]'>
                    <img src={unlock.src} alt="" className='w-full rounded-[20px]' />
                </aside>
                <aside className='basis-[39%]'>
                    <h2 className='font-bold md:text-3xl text-xl mb-[1rem]'>Unlock Real-Time DEX Insights</h2>
                    <p>Uncover insightful data into Token movements with Token View. Gain access to dedicated pages for each Token, track Smart money movements, delve into Token holdings, view price charts, and analyze tables. Dive deep into the world of Tokens and make more informed decision with comprehensive insights at your fingertips.</p>
                </aside>
            </figure>
            <figure className='flex max-md:flex-col-reverse gap-[2%] p-[1rem] my-[1rem] items-center'>

                <aside className='basis-[39%]'>
                    <h2 className='font-bold md:text-3xl text-xl mb-[1rem]'>Unlock Real-Time DEX Insights</h2>
                    <p>Uncover insightful data into Token movements with Token View. Gain access to dedicated pages for each Token, track Smart money movements, delve into Token holdings, view price charts, and analyze tables. Dive deep into the world of Tokens and make more informed decision with comprehensive insights at your fingertips.</p>
                </aside>
                <aside className='basis-[59%]'>
                    <img src={discover.src} alt="" className='w-full rounded-[20px]' />
                </aside>
            </figure>
            <figure className='md:flex  grid  gap-[2%] p-[1rem] my-[1rem] items-center'>
                <aside className='basis-[59%]'>
                    <img src={explore.src} alt="" className='w-full rounded-[20px]' />
                </aside>
                <aside className='basis-[39%]'>
                    <h2 className='font-bold md:text-3xl text-xl mb-[1rem]'>Unlock Real-Time DEX Insights</h2>
                    <p>Uncover insightful data into Token movements with Token View. Gain access to dedicated pages for each Token, track Smart money movements, delve into Token holdings, view price charts, and analyze tables. Dive deep into the world of Tokens and make more informed decision with comprehensive insights at your fingertips.</p>
                </aside>
            </figure>
        </div>
    )
}

export default Offer
