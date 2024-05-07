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
