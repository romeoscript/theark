"use client"
import {useState, useEffect} from 'react';
import { Tabs } from 'antd';
import { usePathname } from 'next/navigation';
import Infor from './infor';
import PortfolioDashboard from './Portfolio';
import TabPane from 'antd/es/tabs/TabPane';
import { IoArrowBackOutline } from "react-icons/io5";
import { PiSlidersLight } from "react-icons/pi";
import { useRouter } from 'next/navigation'
import MonitorWalletTable from '@/components/MonitorWalletTable';
import { useFetch } from '@/components/Hooks/useFetch';
import Loading from '@/components/Loading';
import { IoMdClose } from "react-icons/io";


const onChange = (key) => {
    console.log(key);
};

const Page = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const router = useRouter()
    const [currentTab, setCurrentTab] = useState(0) // 0 -> Monitor Wallet & 1 -> Wallet Overview
    const [open, setOpen] = useState(false)
    const { data: walletOverview, isLoading } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio-holdings/${id}`)

    // console.log(walletOverview)

    const onClose = () => {
      setOpen(false)
    } 

     const drawerStyles = {
    content: {
      boxShadow: '-10px 0 10px #666',
    },
    body: {

    },
    header: {
      marginTop: 70
    },
 
    footer: {
    }
  };

   const data = [
  {
    key: '1',
    token_name: '0x123...',
    token_dec: '18',
    wallet_address: '0x456...',
    value: '100',
    contract_status: 'verified',
    transaction_type: 'Buy',
    possible_spam: 'No',
  },
  {
    key: '2',
    token_name: '0x789...',
    token_dec: '18',
    wallet_address: '0xABC...',
    value: '200',
    contract_status: 'unverified',
    transaction_type: 'Sell',
    possible_spam: 'Yes',
  },
];
    console.log(id, 'pathname');

    if(isLoading) {
      return <Loading />
    }

    return (
      <div className='flex flex-col space-y-5'>
      <button onClick={() => router.back()} className='flex space-x-5 items-center'>
        <IoArrowBackOutline size={30}/>
        <span className='text-lg font-semibold'>Back</span>
      </button>
      <div className='p-1 flex  rounded-2xl bg-gray-200 w-fit'>
        <button onClick={() => setCurrentTab(0)} className={`${!currentTab ? 'bg-gradient text-white': ''} py-5 px-12 rounded-2xl text-gray`}>Monitor Wallet</button>
        <button onClick={() => setCurrentTab(1)} className={` ${currentTab ? 'bg-gradient text-white' : ''} py-5 px-12 rounded-2xl`}>Wallet Overview</button>
      </div>
      {
        !currentTab ? (
          <>
          <div className='flex space-x-3'>
             <div className='flex space-x-2 items-center'>
                        <label className="input input-bordered flex text-black items-center bg-white gap-2 w-[300px]">
                        <input type="text" value={''} onChange={e => {}} className="grow " placeholder="Search wallet/token" />
                        <svg color='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
          </div>
          <button onClick={() => setOpen(true)} className='flex gap-2 p-2 rounded-md border items-center justify-center bg-[#1AABF40D] border-[##1AABF4]'>
            <span className='text-lg font-bold'>Filter</span>
            <PiSlidersLight size={20} />
          </button>
          </div>
          <MonitorWalletTable file={walletOverview?.data} />
            {open && (
        <div className="absolute top-[5.5em] right-0 text-white bg-[#060853] bottom-0 w-[20rem] h-screen p-7 transition-all duration-500 ease-in-out">
          <div className='flex justify-between items-center'>
            <span className='text-lg font-bold'>Filter</span>
            <button onclick={() => setOpen(false)}>
              <IoMdClose className='text-lg text-white'/>
            </button>
          </div>
        </div>
      )}
          </>
        ) : (
          <PortfolioDashboard address={id} />
        )
      }
      </div>
    )
}
export default Page;