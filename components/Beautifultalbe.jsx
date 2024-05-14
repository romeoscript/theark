"use client"
import React from 'react';
import { Table, Tag } from 'antd';
import { CiShare1 } from "react-icons/ci";

const CustomImage = ({ src }) => <img src={src} alt="Logo" className='w-10 h-10 rounded-full' />;

const columns = [
  {
    title: 'TOKEN NAME',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
        <div className='flex items-center gap-3'>
            {record.logo_url ? <img src={record.logo_url} alt={text} className='w-10 h-10 rounded-full' /> : <div className='w-10 h-10 bg-gray-200 rounded-full'></div>}
            <span>{text}</span>
        </div>
    )
  },
  {
    title: 'SMW HOLDERS',
    dataIndex: 'holders_count',
    key: 'holders_count',
  },
  {
    title: 'SMW PORTFOLIO AVE.',
    dataIndex: 'holdings_quantity',
    key: 'holdings_quantity',
    
  },
  {
    title: 'SMW Holdings (USD)',
    dataIndex: 'holdings_usd',
    key: 'holdings_usd',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: 'Price (USD)',
    dataIndex: 'holdings_usd',
    key: 'holdings_usd',
    render: (value) => `$${value.toFixed(2)}`,
  }
];

const BeautifulTable = ({ data }) => {
  console.log(data)
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10 }}
      scroll={{ x: 'max-content' }}
    />
  );
};

export default BeautifulTable;
