"use client"
import React, { useEffect, useState } from 'react'
import { Table, Tag } from 'antd'
import eth from '../public/assets/eth.svg'


const BuyandSell = ({data}) => {

    const columns = [
        {
            title: '',
            dataIndex: 'token_symbol',
            key: 'token_symbol',
            render: (text, record) => (
                <div>
                    {record.token_logo ? <img src={record.token_logo} alt={text} className='w-10 h-10 rounded-full' /> : <div className='w-10 h-10 bg-gray-200 rounded-full'></div>}
                </div>
            )
        },
        {
            title: 'Token  Name',
            dataIndex: 'token_symbol',
            key: 'token_symbol',
            render: (text, record) => (
                <div className='flex items-center justify-center gap-3'>
                    {text}
                </div>
            )
        },
        {
            title: 'Token Decimals',
            dataIndex: 'token_decimals',
            key: 'token_decimals',
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            render: text => parseFloat(text).toLocaleString()
        },
        {
            title: 'Verified Contract',
            dataIndex: 'verified_contract',
            key: 'verified_contract',
            render: (text, record) => (
                <div className='flex items-center justify-center gap-3'>
                    {record.verified_contract ? <Tag color="green">Verified</Tag> : <Tag color="red">Not Verified</Tag>}
                </div>
            )
        },
        {
            title: 'Possible Spam',
            dataIndex: 'possible_spam_time',
            key: 'possible_spam_time',
            render: (text, record) => (
                record.possible_spam ? new Date(text).toLocaleString() : 'No'
            )
        },
    ];
    return (
        <div className='w-4/5 text-black m-auto'>

       
                    <h2 className='text-center font-bold text-3xl text-[green]'>Buys</h2>
                    <Table
                        dataSource={data?.buys}
                        columns={columns}
                        pagination={{ pageSize: 7 }}
                        rowKey={(record, index) => index}
                        size="small"
                    />
           
                    <h2 className='text-center font-bold text-3xl text-[red]'>Sells</h2>
                    <Table
                        dataSource={data?.sells}
                        columns={columns}
                        pagination={{ pageSize: 7 }}
                        rowKey={(record, index) => index}
                        size="small"
                    />
            
        </div>
    )
}

export default BuyandSell
