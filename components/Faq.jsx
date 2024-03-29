"use client"
import React, { useState } from 'react';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import tab from '../public/assets/tab.svg';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
    {
        key: '1',
        label: 'How do I create an account on The Ark',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'What is The Ark',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'How do I create an account on The Ark',
        children: <p>{text}</p>,
    },
    {
        key: '4',
        label: 'How do I create an account on The Ark',
        children: <p>{text}</p>,
    },
];

const Faq = () => {
    const [activeKey, setActiveKey] = useState(null);

    const onChange = (key) => {
        setActiveKey(key);
    };

    const customExpandIcon = (panelProps) => {
        const isExpanded = panelProps.isActive;
        return isExpanded ? <div className='border-white border-[1px] text-white p-[0.5rem] rounded-md'><MinusOutlined className='text-white' /></div> : <div className='button-linear  text-white p-[0.5rem] rounded-md'><PlusOutlined className='text-white' /></div>;
    };

    return (
        <div className='bg-[#060853] p-[2rem] text-white relative my-[4rem] '>
            <img src={tab.src} alt="" 
              className="m-auto absolute h-[90%] left-1/2 top-1/2
               transform-translate-x-1/2 -translate-y-1/2" />

            <h2 className='text-center text-3xl z-4 relative'>FAQs</h2>
            <p className='text-center z-4 relative'>Your questions answered</p>
            <div className='w-3/5 m-auto'>
                <Collapse
                    className='text-white'
                    accordion
                    onChange={onChange}
                    expandIcon={customExpandIcon}
                    expandIconPosition='end'
                >
                    {items.map((item) => (
                        <Collapse.Panel
                            header={item.label}
                            key={item.key}
                            className={activeKey === item.key ? 'ant-collapse-item-active' : ''}
                        >
                            {item.children}
                        </Collapse.Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default Faq;
