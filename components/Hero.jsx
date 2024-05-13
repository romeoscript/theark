"use client"
import {useMemo, useState} from 'react'
import herobg from '../public/assets/hero-bg.svg'
import forex from '../public/assets/forex.svg'
import authbg from '../public/assets/authbg.svg'
import logoWhite from '../public/assets/logo-white.svg'
import { Select, Space } from 'antd'
import { Modal } from "antd";
import Image from 'next/image'
import Signup from './Signup'
import SignIn from './SignIn'
import { Input } from 'antd';
import Auth from './Auth'


const Hero = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [signUpComplete, setSignUpComplete] = useState(false)
    const [verifyEmailModal, setVerifyEmailModal] = useState(false)
    const [profileModal, setProfileModal] = useState(true)
    
    return (
        <div className='md:h-screen h-[60vh]  herobg flex   items-center relative justify-center' style={{ backgroundImage: `url(${herobg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src={forex.src} className='absolute right-[5%]' alt="" />
            <div className='text-center flex flex-col relative  items-center md:w-3/5'>
                <h2 className='md:text-4xl text-2xl '>Elevate Your <span className='  text-bg italic'>Crypto Research</span > Game With Our All-In-One <span className='  text-bg italic'>On-Chain </span> Analytical Tool</h2>
                <p className='my-[2rem] md:text-xl'>Access comprehensive insights into Blockchain Data, Token movements, Market Trends and more. Empowering you to make informed decisions and stay ahead in the dynamic world of Cryptocurrencies.</p>

                {/* <Link href='/dashboard/'> */}
                    <button onClick={() => setModalOpen(true)} className='button-linear rounded-fiImagemgull px-[3.5rem] py-[0.5rem]'>Get started</button>
                {/* </Link> */}
            </div>
        <Modal
            centered
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            footer={null}
            width={900}
            zIndex={2000}
            wrapClassName='p-0'
            // closeIcon={null}
        >
        <div className='flex gap-5'>
        <div className='relative'>
            <Image
                src={authbg}
                alt=''
                className='object-cover w-[400px] h-[600px] rounded-lg'
            />
            <Image
                src={logoWhite}
                alt=''
                className='absolute top-[175px] left-7 right-auto w-64 h-60'
            />
        </div>
        <div className='relative'>
             <Auth setVerifyEmailModal={setVerifyEmailModal} setModalOpen={setModalOpen}/>
        </div>
        </div>
      </Modal>
       <Modal
            centered
            open={verifyEmailModal}
            onCancel={() => setVerifyEmailModal(false)}
            footer={null}
            width={900}
            zIndex={2000}
            wrapClassName='p-0'
            // closeIcon={null}
        >
        <div className='flex gap-5'>
        <div className='relative'>
            <Image
                src={authbg}
                alt=''
                className='object-cover w-[400px] h-[600px] rounded-lg'
            />
            <Image
                src={logoWhite}
                alt=''
                className='absolute top-[175px] left-7 right-auto w-64 h-60'
            />
        </div>
        <div className='relative'>
                    <div className='flex flex-col justify-center items-center w-full h-full space-y-7'>
                        <div className='space-y-3 flex flex-col justify-center items-center'>
                            <span className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1AABF4] to-[#383EE5]'>Verify Email</span>
                            <span className='w-[70%] text-center'>We've sent a verification link to @joe****@gmail.com Click on it to continue the Sign Up process</span>
                        </div>
                        <button className='w-[50%] bg-gradient p-3 rounded-full text-white'>Return home</button>
                    </div>
        </div>
        </div>
      </Modal>
      <Modal
            centered
            open={profileModal}
            onCancel={() => setProfileModal(false)}
            footer={null}
            width={900}
            zIndex={2000}
            wrapClassName='p-0'
            // closeIcon={null}
        >
        <div className='flex gap-5'>
        <div className='relative'>
            <Image
                src={authbg}
                alt=''
                className='object-cover w-[300px] h-[600px] rounded-lg'
            />
            <Image
                src={logoWhite}
                alt=''
                className='absolute top-[170px] left-7 right-auto w-64 h-60'
            />
        </div>
        <div className='relative'>
                    <div className='flex flex-col justify-center items-center w-full h-full space-y-7 px-5'>
                        <div className='space-y-3 flex flex-col justify-center items-center'>
                            <span className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1AABF4] to-[#383EE5]'>Welcome To The Ark</span>
                            <span className='w-[70%] text-center'>Provide the informations following details so as to serve you better</span>
                        </div>
                        <div className='flex flex-col space-y-5 justify-center items-center'>
                            <div className='flex gap-4'>
                                <Input placeholder="First name" className='p-2' />
                                <Input placeholder="Last name" className='p-2' />
                            </div>
                            <Input.Password placeholder='Password' className='p-2' />
                            <Input.Password placeholder='Confirm Password' className='p-2' />
                            <Select
                                defaultValue="Nigeria"
                                style={{
                                  width: '100%',
                                }}
                                onChange={() => {}}
                                options={[
                                  {
                                    value: 'Nigeria',
                                    label: 'Nigeria',
                                  },
                                  {
                                    value: 'United Kingdom',
                                    label: 'United Kingdom',
                                  },
                                  {
                                    value: 'Cameroon',
                                    label: 'Cameroon',
                                  }
                                ]}
                            />

                            <button className='w-[50%] bg-gradient p-3 rounded-full text-white'>Save</button>
                        </div>
                    </div>
        </div>
        </div>
      </Modal>
        </div>
    )
}

export default Hero
