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
        title: <span style={{ color: '#1AABF4', fontSize:'12px' }}>TOKEN</span>,
        dataIndex: 'token_name',
        key: 'token_name',
        render: (text, record) => (
            <a href={`/dashboard/${text}`} style={{ color: '#383EE5' }}>{truncateHash(text)}</a>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>TOKEN DEC.</span>,
        dataIndex: 'token_dec',
        key: 'token_dec',
        render: text => <span style={{ color: 'black',  fontSize:'12px' }}>{text}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>WALLET ADDRESS</span>,
        dataIndex: 'wallet_address',
        key: 'wallet_address',
        render: text => <span style={{ color: 'black' }}>{truncateHash(text)}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>VALUE</span>,
        dataIndex: 'value',
        key: 'value',
        render: (text, record) => (
            <span>{text}</span>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>CONTRACT STATUS</span>,
        dataIndex: 'contract_status',
        key: 'contract_status',
        render: text => <span style={{ backgroundColor: text == 'verified' ? '#0080001A' : '#FF00001A', borderRadius: '7px', color: text == 'verified' ? '#008000' : '#FF0000', padding: 9 }}>{text}</span>,
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>TRANSACTION TYPE</span>,
        dataIndex: 'transaction_type',
        key: 'transaction_type',
        render: (text, record) => (
            <span style={{ color: text == 'Buy' ? '#008000' : '#FF0000' }}>{text}</span>
        ),
    },
    {
        title: <span style={{ color: '#1AABF4',  fontSize:'12px' }}>POSSIBLE SPAM</span>,
        dataIndex: 'possible_spam',
        key: 'possible_spam',
        render: (text, record) => (
            <span>{text}</span>
        ),
    },
];

const MonitorWalletTable = ({ file: originalData }) => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

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
