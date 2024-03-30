import React from 'react'
import herobg from '../public/assets/hero-bg.svg'
import forex from '../public/assets/forex.svg'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='md:h-screen h-[60vh]  herobg flex   items-center relative justify-center' style={{ backgroundImage: `url(${herobg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src={forex.src} className='absolute right-[5%]' alt="" />
            <div className='text-center flex flex-col relative  items-center md:w-3/5'>
                <h2 className='md:text-4xl text-2xl '>Elevate Your <span className='  text-bg italic'>Crypto Research</span > Game With Our All-In-One <span className='  text-bg italic'>On-Chain </span> Analytical Tool</h2>
                <p className='my-[2rem] md:text-xl'>Access comprehensive insights into Blockchain Data, Token movements, Market Trends and more. Empowering you to make informed decisions and stay ahead in the dynamic world of Cryptocurrencies.</p>

                <Link href='/Dashboard'>
                    <button className='button-linear rounded-full px-[3.5rem] py-[0.5rem]'>Get started</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
