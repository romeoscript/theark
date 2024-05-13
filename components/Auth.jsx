import { useMemo, useState } from 'react'
import SignIn from './SignIn'
import Signup from './Signup'

const Auth = ({ setVerifyEmailModal, setModalOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const screens = useMemo(() => [Signup, SignIn], [])

  const CurrentScreen = screens[currentIndex]

  return (
    <div className='flex flex-col flex-1 justify-start items-center space-y-5 px-2'>
      <div className='bg-[#f9f9f9] space-x-5 w-fit p-2 px-3 rounded-2xl'>
                <button onClick={() => setCurrentIndex(0)} className={` ${currentIndex == 0 ? "bg-gradient px-8  text-white" : "text-[#808080] px-2"} p-2 rounded-xl py-3 text-center font-medium`}>Sign up</button>
                <button onClick={() => setCurrentIndex(1)} className={`${currentIndex == 1 ? "bg-gradient px-8 text-white" : "text-[#808080] px-2 "} text-center py-3 font-medium rounded-xl`}>Sign in</button>
      </div>
      {CurrentScreen ? <CurrentScreen setVerifyEmailModal={setVerifyEmailModal} setModalOpen={setModalOpen} /> : <CurrentScreen />}
      <div className='absolute bottom-0 flex space-x-10 justify-center items-center w-full text-[#808080] opacity-50' >
            <span>Customer Support</span>
            <span>|</span>
            <span>Privacy Policy</span>
      </div>
    </div>
  )
}

export default Auth