"use client"
import React, { useState } from 'react'
import logo from '../public/assets/logo.svg'
import { RiMenu4Fill } from "react-icons/ri";
import Link from 'next/link';

const Nav = () => {
    const [showMobile, setShowMobile] = useState(false)
    const displayMobile = () => {
        setShowMobile(!showMobile)
    }
    return (
        <nav className='fixed top-0 w-full flex justify-around bg-[#060853] text-white h-[80px] p-[1rem]' style={{ zIndex: 100 }}>
            <h1 className='flex items-center max-md:w-10 max-md:text-md'> <img src={logo.src} alt="" /><span className='max-md:hidden'>The Ark</span></h1>
            <ul className='md:flex hidden items-center gap-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm p-[1rem] px-[2rem] rounded-full  '>
                <li>
                    <a href="/">Features</a>
                </li>
                <li>
                    <a href="/about">Resources</a>
                </li>
                <li>
                    <a href="/about">Faqs</a>
                </li>
                <li>
                    <a href="/about">Pricing</a>
                </li>
            </ul>
            <Link href='/Dashboard'>
                <button className='button-linear px-[2rem] py-[1rem] rounded-full text-center flex items-center justify-center'>Explore</button>
            </Link>
            <div className=' text-3xl relative'>
                <RiMenu4Fill className='md:hidden cursor-pointer' onClick={displayMobile} />

                {showMobile &&
                    <ul className='z-10 text-lg items-center gap-4 bg-[#060853] backdrop-blur-sm p-[1rem] px-[2rem] rounded-lg  absolute top-[50px] right-[1%] animate-in fade-in zoom-in' style={{ zIndex: 200 }}>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/about">Resources</a>
                        </li>
                        <li>
                            <a href="/about">Faqs</a>
                        </li>
                        <li>
                            <a href="/about">Pricing</a>
                        </li>
                    </ul>}
            </div>

        </nav>

    )
}

export default Nav
