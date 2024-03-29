"use client"
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import Link from 'next/link';

const columns = [
    {
        title: <span style={{ color: '#1AABF4' }}>ADDRESS</span>,
        dataIndex: 'address',
        key: 'address',
        render: (text, record) => (
            <Link to={`/address/${text}`} style={{ color: '#383EE5' }}>{text}</Link>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4' }}>CHAIN</span>,
        dataIndex: 'chain',
        key: 'chain',
        render: text => <span style={{ color: 'black' }}>{text}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4' }}>HASH</span>,
        dataIndex: 'hash',
        key: 'hash',
        render: text => <span style={{ color: 'black' }}>{text}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4' }}>Transaction Type</span>,
        dataIndex: 'transactionType',
        key: 'transactionType',
        render: (text, record) => (
            <span style={{ color: text === 'Buy' ? 'red' : 'green' }}>{text}</span>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4' }}>TIME</span>,
        dataIndex: 'time',
        key: 'time',
        render: text => <span style={{ color: 'black' }}>{text}</span>,
    },
];

const DataTable = ({ file: originalData }) => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const filteredData = originalData.filter(item =>
            Object.keys(item).some(key =>
                String(item[key]).toLowerCase().includes(searchText.toLowerCase())
            )
        );
        setData(filteredData);
    }, [searchText, originalData]);
    useEffect(() => {
        const formattedData = originalData.map(item => {
            const lastResult = item?.activeChains?.jsonResponse.result[item?.activeChains?.jsonResponse.result.length - 1];
            const address = item.address;
            const hash = lastResult?.hash;
            const chain= 'ERC20';
            const time = lastResult?.block_timestamp;
            const fromAddress = lastResult?.from_address;

            const transactionType = fromAddress === address ? 'Sell' : 'Buy';

            return {
                address,
                hash,
                chain,
                time,
                transactionType,
            };
        });
        setData(formattedData);
    }, [originalData]);


    return (
        <>
        <figure className='p-[1rem]'>
                <label className="input input-bordered flex text-black items-center bg-white gap-2 w-[300px]">
                    <input type="text"  value={searchText} onChange={e => setSearchText(e.target.value)} className="grow " placeholder="Search wallet/token" />
                    <svg color='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </figure>
            <Table
                columns={columns}
                dataSource={data}
                rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                pagination={{ pageSize: 15 }}
            />
        </>
    );
};

export default DataTable;
