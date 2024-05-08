"use client"
import React from 'react';
import { Tabs } from 'antd';
import { usePathname } from 'next/navigation';
import Infor from './infor';
import PortfolioDashboard from './Portfolio';
import TabPane from 'antd/es/tabs/TabPane';


const onChange = (key) => {
    console.log(key);
};

   const tabBarStyle = {
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #e8e8e8',
  };

  // Custom styles for the tab bar extra content (tab panes)
  const tabBarExtraContentStyle = {
    padding: '20px',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    backgroundColor: '#fff',
  };

  const tabBarExtraContent = (
    <div style={tabBarExtraContentStyle}>
      {/* Render the tab content here */}
    </div>
  );

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
    return <Tabs defaultActiveKey="1" onChange={onChange} className='bg-black-600' items={items}/>
}
export default Page;