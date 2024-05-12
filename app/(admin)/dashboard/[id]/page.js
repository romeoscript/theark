"use client"
import {useState, useEffect} from 'react';
import { Drawer, Tabs } from 'antd';
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
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const tokens = [
  {
    name: 'ETH',
    selected: false
  },
  {
    name: 'SOL',
    selected: false
  },
  {
    name: 'XRP',
    selected: false
  },
  {
    name: 'BTC',
    selected: false
  },
  {
    name: 'ETH',
    selected: false
  },
  {
    name: 'SOL',
    selected: false
  },
  {
    name: 'XRP',
    selected: false
  },
  {
    name: 'BTC',
    selected: false
  }
]


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
    const [dropDowns, setDropDowns] = useState({
      tokens: false,
      transactionsStatus: false,
      contractStatus: false
    })


    const onClose = () => {
      setOpen(false)
    } 

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
          <Drawer
            title=""
            placement="right"
            closable={false}
            onClose={onClose}
            open={open}
            style={{ backgroundColor: '#060853' }}
          >
            <div className='flex flex-col space-y-10'>
              <div className='flex justify-between items-center'>
                <span className='text-xl font-bold'>Filter</span>
                  <button onClick={() => onClose()}>
                    <IoMdClose className='text-2xl'/>
                  </button>
              </div>
              <div className='flex flex-col space-y-3 border-b border-gray-100 pb-8'>
                <div className='flex justify-between' >
                  <span className='text-lg text-[#808080] font-bold'>TOKEN NAME</span>
                  <button onClick={() => setDropDowns({...dropDowns, tokens: !dropDowns?.tokens})}>
                    {dropDowns?.tokens ? <FaAngleUp /> : <FaAngleDown />}
                  </button>
                </div>
                <div className={`flex gap-4 flex-wrap ${!dropDowns?.tokens && 'hidden'}`}>
                  {
                    tokens?.map((token, index) => (
                      <div key={index} className='flex gap-2 items-center'>
                        <input type='checkbox' checked={token?.selected} />
                        <span className='text-lg'>{token?.name}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-col space-y-3 border-b pb-8 border-gray-100'>
                <div className='flex justify-between' >
                  <span className='text-lg text-[#808080] font-bold'>TRANSACTION STATUS</span>
                  <button onClick={() => setDropDowns({...dropDowns, transactionsStatus: !dropDowns?.transactionsStatus})}>
                    {dropDowns?.transactionsStatus ? <FaAngleUp /> : <FaAngleDown />}
                  </button>
                </div>
                <div className={`flex gap-4 flex-wrap ${!dropDowns?.transactionsStatus && 'hidden'}`}>
                 
                      <div className='flex gap-2 items-center'>
                        <input type='radio' />
                        <span className='text-lg'>BUY</span>
                      </div>
                      <div className='flex gap-2 items-center'>
                        <input type='radio' />
                        <span className='text-lg'>SELL</span>
                      </div>
                </div>
              </div>
               <div className='flex flex-col space-y-3  pb-8'>
                <div className='flex justify-between' >
                  <span className='text-lg text-[#808080] font-bold'>CONTRACT STATUS</span>
                  <button onClick={() => setDropDowns({...dropDowns, contractStatus: !dropDowns?.contractStatus})}>
                    {dropDowns?.contractStatus ? <FaAngleUp /> : <FaAngleDown />}
                  </button>
                </div>
                <div className={`flex gap-4 flex-wrap ${!dropDowns?.contractStatus && 'hidden'}`}>
                      <div className='flex gap-2 items-center'>
                        <input type='radio' />
                        <span className='text-lg'>Verified</span>
                      </div>
                </div>
              </div>
              <div className='absolute bottom-6 flex justify-around items-center w-full'>
                  <button className='p-4 px-8 border rounded-full'>Reset</button>
                  <button className='p-4  px-8 rounded-full bg-gradient'>Apply</button>
              </div>
            </div>
          </Drawer>
          </>
        ) : (
          <PortfolioDashboard address={id} />
        )
      }
      </div>
    )
}
export default Page;
