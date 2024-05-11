'use client'
import React from 'react'
import { Table } from 'antd';
import { useFetch } from '@/components/Hooks/useFetch';


const Page = () => {
  const { data, isLoading } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/wallets`)

  const columns = [
    {
        title: <span style={{ color: '#1AABF4', fontSize:'12px' }}>ADDRESS</span>,
        dataIndex: 'address',
        key: 'address',
        render: (text, record) => (
            <button onClick={() => router.navigate(`/dashboard/${text}`)} style={{ color: '#383EE5' }}>{text}</button>
        ),
    },
  ]

  return (
    <div className='gap-4 flex flex-col space-y-5'>
      <span className='text-xl font-semibold'>Wallets</span>
      <Table
          columns={columns}
          dataSource={data}
          rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
          pagination={{ pageSize: 15 }}
          size="small"
          style={{ maxWidth: '40%', overflowX: 'auto' ,fontSize: '12px!important' }}
      />
    </div>
  )
}

export default Page