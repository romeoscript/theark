import React from 'react'
import herobg from '../public/assets/hero-bg.svg'

const Sub = () => {
  return (
    <section className='p-[2rem] h-[500px] flex items-center justify-center'>
      <div className='w-full h-full subbg rounded-[40px] flex items-center justify-center flex-col relative'>
        <img src={herobg.src} alt="" className='absolute object-cover h-full w-full rounded-[40px] opacity-[0.4]' />
        <h2 className='text-4xl relative'>Subscribe To Our Newsletter</h2>
        <p className='my-[2rem] w-[55%] text-center relative'>Stay updated on the latest trends and news in tech and blockchain. No spammy messages, only top notch contents and notifications</p>
        <form className='w-[50%] mx-auto text-center relative'>
          <input type='email'  className="block w-full p-[1rem] rounded-[12px] mb-[2rem] text-black" placeholder='Enter your email' />
          <button className='w-full text-center p-[1rem] rounded-full border-white border-[1px]'>Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Sub
