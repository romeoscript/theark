"use client"
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';


const truncateHash = hash => {
    if (hash) {
        return `${hash.slice(0, 5)}****${hash.slice(-5)}`;
    }
    return '';
};
const columns = [
    {
        title: <span style={{ color: '#1AABF4', fontSize:'12px' }}>ADDRESS</span>,
        dataIndex: 'address',
        key: 'address',
        render: (text, record) => (
            <a href={`/Dashboard/${text}`} style={{ color: '#383EE5' }}>{truncateHash(text)}</a>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>CHAIN</span>,
        dataIndex: 'chain',
        key: 'chain',
        render: text => <span style={{ color: 'black',  fontSize:'12px' }}>{text}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>HASH</span>,
        dataIndex: 'hash',
        key: 'hash',
        render: text => <span style={{ color: 'black' }}>{truncateHash(text)}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>Transaction Type</span>,
        dataIndex: 'transactionType',
        key: 'transactionType',
        render: (text, record) => (
            <span style={{ color: text === 'Sell' ? 'red' : 'green' }}>{text}</span>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>TIME</span>,
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
            const chain = 'ERC20';
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
            <figure>
                <label className="input input-bordered flex text-black items-center bg-white gap-2 w-[300px]">
                    <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} className="grow " placeholder="Search wallet/token" />
                    <svg color='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </figure>
       
                <Table
                    columns={columns}
                    dataSource={data}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                    pagination={{ pageSize: 15 }}
                    size="small"
                   style={{ maxWidth: '100%', overflowX: 'auto' ,fontSize: '12px!important' }}
                />
        
        </>
    );
};

export default DataTable;
