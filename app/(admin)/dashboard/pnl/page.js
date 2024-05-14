"use client"
import {useState, useEffect} from 'react';
import { Drawer, Tabs } from 'antd';
import { usePathname } from 'next/navigation';
import TabPane from 'antd/es/tabs/TabPane';
import { IoArrowBackOutline } from "react-icons/io5";
import { PiSlidersLight } from "react-icons/pi";
import { useRouter } from 'next/navigation'
import MonitorWalletTable from '@/components/MonitorWalletTable';
import { useFetch } from '@/components/Hooks/useFetch';
import Loading from '@/components/Loading';
import { IoMdClose } from "react-icons/io";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import PortfolioDashboard from '../[id]/Portfolio';


const onChange = (key) => {
    console.log(key);
};

const Page = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const router = useRouter()
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
            <span className='text-lg font-bold'>Hightest PnL</span>
          <PortfolioDashboard address='0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc' /> {/** To change no pNl endpoint */}
      </div>
    )
}
export default Page;
