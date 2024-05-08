"use client"
import React from 'react';
import { Table, Tag } from 'antd';
import { CiShare1 } from "react-icons/ci";

const CustomImage = ({ src }) => <img src={src} alt="Logo" className='w-10 h-10 rounded-full' />;

const truncateAddress = address => {
    if (address) {
        return `${address.slice(0, 5)}...${address.slice(-5)}`;
    }
    return '';
};

const columns = [
  {
    title: 'TOKEN NAME',
    dataIndex: 'token_name',
    key: 'token_name',
  },
  {
    title: 'CONTRACT ADDRESS',
    dataIndex: 'contract_address',
    key: 'contract_address',
    render: (text, record) => (
            <span style={{ color: '#383EE5' }}>{truncateAddress(text)}</span>
    ),
  },
  {
    title: 'PRICE(USD)',
    dataIndex: 'usd_price',
    key: 'usd_price',
    render: (value) => (value ? `$${value.toFixed(3)}` : 'N/A'),
  },
  {
    title: 'SMW HOLDERS',
    dataIndex: 'smw_holders',
    key: 'smw_holders',
  },
  {
    title: 'LIQUIDITY',
    dataIndex: 'liquidity',
    key: 'liquidity',
  },
  {
    title: 'MARKET CAP.',
    dataIndex: 'market_cap',
    key: 'market_cap',
  },
];

const ListingTable = ({ data }) => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10 }}
      scroll={{ x: 'max-content' }}
    />
  );
};

export default ListingTable;
