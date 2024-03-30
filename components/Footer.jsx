import React from 'react'
import logo from '../public/assets/logo-white.svg'

const Footer = () => {
  return (
    <div className='footerbg'>
      <section>
        <div className='md:flex items-center justify-between px-[3rem] '>
          <div className='relative ' >
            <img src={logo.src} className='block max-md:w-40' alt="" />
            <p className='text-white font-bold text-3xl absolute bottom-4 md:left-[30%] left-[10%]'>The Ark</p>
          </div>
          <div className='flex gap-16'>
            <div className=''>
              <h2 className='text-[#1AABF4]'>Company</h2>
              <p className='text-white'>Explore</p>
              <p className='text-white'>About Us</p>
              <p className='text-white'>Features</p>
              <p className='text-white'>Pricing</p>
              <p className='text-white'>Blog</p>
            </div>
            <div className=''>
              <h2 className='text-[#1AABF4]'>Quick Links</h2>
              <p className='text-white'>Resourses</p>
              <p className='text-white'>FAQs</p>
              <p className='text-white'>Contact Us</p>
              <p className='text-white'>Careers</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center text-white max-md:mt-[1rem]'>
          <p className='px-[1rem] max-md:text-[12px]'>Customer Support</p>
          <p className='px-[2rem] max-md:text-[12px] border-l border-r border-gray-300'>Privacy  Policy</p>
          <p className='px-[1rem] max-md:text-[12px]'>Terms & Condition</p>
        </div>
        <hr className='my-[1rem] w-4/5 m-auto max-md:hidden' />
        <figure className='text-white flex items-center gap-4 justify-between py-[1rem] px-[4rem]'>
          <p className='max-md:text-sm max-md:absolute'>Copyright © 2023 - 2024 The Ark Inc. All rights reserved</p>
          <div className="flex gap-4">
            <a className=' bg-white rounded-full p-[0.5rem] opacity-[0.3] text-gray-500'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a className=' bg-white rounded-full p-[0.5rem] opacity-[0.3] text-gray-500'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a className=' bg-white rounded-full p-[0.5rem] opacity-[0.3] text-gray-500'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </figure>
      </section>
    </div>
  )
}

export default Footer
