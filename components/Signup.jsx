import { FcGoogle } from "react-icons/fc";
import { Input } from 'antd';
import Link from 'next/link'

const Signup = ({ setVerifyEmailModal, setModalOpen }) => {
  return (
    <>
            <div className='flex flex-col space-y-4'>
                <span className='text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#1AABF4] to-[#383EE5]'>Ready To Take A Free Trial?</span>
                <span className='text-center'>Kickoff your journey with The Ark</span>
            </div>
            <button className='flex gap-3 items-center border-[#D0D5DD] p-4 border px-20 rounded-full'>
                <FcGoogle size={26}/>
                Sign up with Google
            </button>
            <div className='flex items-center w-[70%] gap-2'>
                <div className='border-b-2 h-1 border-[#D0D5DD] flex-1'></div>
                <span className='text-[#808080]'>or</span>
                <div className='border-b-2 h-1 border-[#D0D5DD] flex-1'></div>

            </div>
            <div className='w-[70%]'>
                <Input placeholder="Email Address" className='p-2' />
            </div>
            <button onClick={() => {
              setModalOpen(false)
              setVerifyEmailModal(true)
            }} className='w-[50%] bg-gradient p-3 rounded-full text-white'>Sign up</button>
            <span className='text-center text-[#808080] text-md w-[75%]'>By clicking on the &quot;Sign Up&ldquo; button you agree to the <Link href='/'>Terms & Condition</Link> of that has been laid down by The Ark</span>
    </>
  )
}

export default Signup