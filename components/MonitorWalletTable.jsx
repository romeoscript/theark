"use client"
import React, { useState, useEffect } from 'react';
import { Table, Statistic } from 'antd';


const truncateHash = hash => {
    if (hash) {
        return `${hash.slice(0, 5)}****${hash.slice(-5)}`;
    }
    return '';
};
const columns = [
    {
        title: <span style={{ color: '#1AABF4', fontSize:'12px' }}>TOKEN</span>,
        dataIndex: ['id', 'type', 'attributes', 'relationships'],
        key: 'token',
        render: (text, record) => (
            <div className='flex gap-2'>
                <img src={record?.attributes?.fungible_info?.icon?.url} alt='' className='w-5 h-5' />
                <a href={`/dashboard/${text}`} style={{ color: '#383EE5' }}>{record?.attributes?.fungible_info?.symbol}</a>
            </div>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>TOKEN DEC.</span>,
        dataIndex: ['id', 'type', 'attributes', 'relationships'],
        key: 'attributes',
        render: (text, record) => <span style={{ color: 'black',  fontSize:'12px' }}>{record?.attributes?.quantity?.decimals}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>WALLET ADDRESS</span>,
        dataIndex: ['id', 'type', 'attributes', 'relationships'],
        key: 'wallet_address',
        render: (text, record) => <span style={{ color: 'black' }}>{truncateHash(record?.attributes?.fungible_info?.implementations[0]?.address)}</span>,
    },
    {
        title: <span style={{  fontSize:'12px' }}>VALUE</span>,
        dataIndex: ['id', 'type', 'attributes', 'relationships'],
        key: 'value',
        render: (text, record) => (
            <div className='flex flex-col '>
                <span className='text-lg font-semibold'>
                    <Statistic title="" value={record?.attributes?.value} precision={3}/>
                </span>
                <span className='text-xs text-[#808080]'>
                    <Statistic title="" value={record?.attributes?.price} prefix="$" />
                </span>
            </div>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>CONTRACT STATUS</span>,
        dataIndex: ['id', 'type', 'attributes', 'relationships'],
        key: 'contract_status',
        render: (text, record) => <span style={{ backgroundColor: (record?.attributes?.fungible_info?.flag?.verified) == true ? '#0080001A' : '#FF00001A', borderRadius: '7px', color: text == 'verified' ? '#008000' : '#FF0000', padding: 9 }}>{(record?.attributes?.fungible_info?.flag?.verified) ? 'verified' : 'unverified'}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>TRANSACTION TYPE</span>,
        dataIndex: ['id', 'type', 'attributes', 'relationships'],
        key: 'transaction_type',
        render: (text, record) => (
            <span style={{ color: text == 'Buy' ? '#008000' : '#FF0000' }}>Buy</span> // change
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>POSSIBLE SPAM</span>,
        dataIndex: ['id', 'type', 'attributes', 'relationships'],
        key: 'possible_spam',
        render: (text, record) => (
            <span>No</span>// change
        ),
    },
];

const MonitorWalletTable = ({ file: originalData }) => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

    console.log(originalData)

    return (
        <>
                <Table
                    columns={columns}
                    dataSource={originalData}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                    pagination={{ pageSize: 15 }}
                    size="small"
                   style={{ maxWidth: '100%', overflowX: 'auto' ,fontSize: '12px!important' }}
                />
        
        </>
    );
};

export default MonitorWalletTable;
