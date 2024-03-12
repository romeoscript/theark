import React from 'react'
import logo from '../public/assets/logo.svg'

const Nav = () => {
    return (
        <nav className='fixed top-0 w-full flex justify-around text-white h-[80px] p-[1rem]'>
            <h1 className='flex items-center'> <img src={logo.src} alt="" />The Ark</h1>
            <ul className='flex items-center gap-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm p-[1rem] px-[2rem] rounded-full  '>
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
            <button className='button-linear px-[2rem] py-[1rem] rounded-full text-center flex items-center justify-center'>Explore</button>
        </nav>

    )
}

export default Nav
