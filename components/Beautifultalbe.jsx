"use client"
import React from 'react';
import { Table, Tag } from 'antd';
import { CiShare1 } from "react-icons/ci";

const CustomImage = ({ src }) => <img src={src} alt="Logo" className='w-10 h-10 rounded-full' />;

const columns = [
  {
    title: 'TOKEN NAME',
    dataIndex: 'token_name',
    key: 'token_name',
  },
  {
    title: 'SMW HOLDERS',
    dataIndex: 'smw_holders',
    key: 'smw_holders',
  },
  {
    title: 'SMW PORTFOLIO AVE.',
    dataIndex: 'swm_portfolio_ave',
    key: 'swm_portfolio_ave',
    render: (text, record) => (
        <div>
            {record.logo ? <img src={record.logo} alt={text} className='w-10 h-10 rounded-full' /> : <div className='w-10 h-10 bg-gray-200 rounded-full'></div>}
        </div>
    )
  },
  {
    title: 'SMW Holdings (USD)',
    dataIndex: 'smw_holdings_usd',
    key: 'smw_holdings_usd',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: 'PRICE(USD)',
    dataIndex: 'usd_price',
    key: 'usd_price',
    render: (value) => (value ? `$${value.toFixed(5)}` : 'N/A'),
  },
  {
    title: 'CONTRACT STATUS',
    dataIndex: 'verified_contract',
    key: 'verified_contract',
    render: (verified) => (
      <div>
        verified ? <Tag color="green">Verified</Tag> : <Tag color="red">Unverified</Tag>
        <span>View address <CiShare1 /></span>
      </div>
      ),
  },
];

const BeautifulTable = ({ data }) => {
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
