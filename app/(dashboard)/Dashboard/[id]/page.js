"use client"
import React from 'react';
import { Tabs } from 'antd';
import { usePathname } from 'next/navigation';
import Infor from './infor';
import PortfolioDashboard from './Portfolio';


const onChange = (key) => {
    console.log(key);
};

const Page = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const items = [
        {
            key: '1',
            label: 'Monior Wallet',
            children:  <Infor address={id} />,
        },
        {
            key: '2',
            label: 'Wallet Overview',
            children: <PortfolioDashboard address={id} />,
        },
       
    ];
    console.log(id, 'pathname');
    return <div className='mt-[7rem] px-[1rem]'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

    </div>;
}
export default Page;