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
        dataIndex: 'contract_address',
        key: 'contract_address',
        render: (text, record) => (
            <div className='flex gap-2'>
                <img src={record?.token_logo} alt='' className='w-5 h-5 '/>
                <button onClick={() => navigator.clipboard.writeText(text)} style={{ color: '#383EE5' }}>{truncateHash(text)}</button>
            </div>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>CHAIN</span>,
        dataIndex: 'token_symbol',
        key: 'token_symbol',
        render: text => <span style={{ color: 'black',  fontSize:'12px' }}>{text}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>HASH</span>,
        dataIndex: 'transaction_hash',
        key: 'transaction_hash',
        render: text => <span style={{ color: 'black' }}>{truncateHash(text)}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>Transaction Type</span>,
        dataIndex: 'type',
        key: 'type',
        render: (text, record) => (
            <span style={{ color: text === 'sell' ? 'red' : 'green' }}>{text}</span>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>TIME</span>,
        dataIndex: 'time_ago',
        key: 'time_ago',
        render: text => <span style={{ color: 'black' }}>{text}</span>,
    },
];

const DataTable = ({ file: originalData }) => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

    // useEffect(() => {
    //     const filteredData = originalData.filter(item =>
    //         Object.keys(item).some(key =>
    //             String(item[key]).toLowerCase().includes(searchText.toLowerCase())
    //         )
    //     );
    //     setData(filteredData);
    // }, [searchText, originalData]);

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

export default DataTable;
