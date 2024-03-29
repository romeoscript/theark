"use client"
import React from 'react';
import { Tabs } from 'antd';
import BuyandSell from '@/components/BuyandSell';
import Infor from './infor';
import PortfolioDashboard from './Portfolio';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Monior Wallet',
        children:  <Infor />,
    },
    {
        key: '2',
        label: 'Wallet Overview',
        children: <PortfolioDashboard />,
    },
   
];
const Page = () => {
    return <div className='mt-[7rem] px-[1rem]'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

    </div>;
}
export default Page;