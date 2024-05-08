"use client"
import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Space, Avatar, Pagination } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetch } from '@/components/Hooks/useFetch';
import Loading from '@/components/Loading';
import { Watermark } from 'react-watermark-component';
import watermarkLogo from '../../../../public/assets/logo.svg'
import { LuLayoutGrid } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";
const { Meta } = Card;


const Page = () => {
    const datas = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/highest_growth_wallet`)
    const isLoading = datas.isLoading
    const [currentPage, setCurrentPage] = useState(1);
    const [displayMode, setDisplayMode] = useState(0) // 0 -> Grid & 1 -> Row
    const pageSize = 6;

    const getRowClassName = (record) => {
        return record.possible_spam ? 'spam-row' : '';
    };
    const data = datas?.data
    const networth = data?.net_worth;
    const wallet = data?.wallet;
    const portfolioData = data ? data['portfolio_data'] : null;

    const totalPages = portfolioData ? Math.ceil(portfolioData.result.length / pageSize) : 0;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return <Loading />
    }

    const testData = {
  result: [
    {
      symbol: 'AAPL',
      name: 'AAPL',
      balance: 5883023.3,
      portfolio_percentage: 34,
      usd_price_24hr_percent_change: 12,
      usd_price: 150.2,
      usd_value: 150200.0,
    },
    {
      symbol: 'GOOG',
      name: 'GOOG',
      balance: 382734.3,
      portfolio_percentage: 17,
      usd_price_24hr_percent_change: 12,
      usd_price: 180.2,
      usd_value: 372.0,
    },
    {
      symbol: 'META',
      name: 'META',
      balance: 38293.3,
      portfolio_percentage: 19,
      usd_price_24hr_percent_change: 26,
      usd_price: 183050.2,
      usd_value: 37381.0,
    },
    {
      symbol: 'YUN',
      name: 'YUN',
      balance: 38293.3,
      portfolio_percentage: 16,
      usd_price_24hr_percent_change: 12,
      usd_price: 7388.2,
      usd_value: 2939.0,
    },
    {
      symbol: 'TWITTER',
      name: 'TWITTER',
      balance: 3829.3,
      portfolio_percentage: 19,
      usd_price_24hr_percent_change: 12,
      usd_price: 74.2,
      usd_value: 8392.0,
    },
  ]
}
    return (
        <div>
            <div className='flex gap-4 max-md:flex-col flex-col' >
                <span className='text-4xl font-semibold'>Hightest PnL</span>
                <Col xs={24} sm={24} md={8}>
                    <Card
                    >
                        {/* <Statistic title="Total Networth (USD)" value={parseFloat(networth?.total_networth_usd)} precision={2} /> */}
                        <Statistic title="Total Networth (USD)" value={parseFloat(34938234.73483)} precision={2} />

                    </Card>
                </Col>

            </div> 
            <div className='my-10 w-full flex justify-center items-center'>
            <Col xs={24} sm={24} md={16}>
                    <Card>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={testData?.result}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="symbol" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="usd_price" name="Price (USD)" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="usd_value" name="Value (USD)" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                    </Card>
                </Col>
            </div>

            
            <div className='w-[90%] m-auto'>
                <Row gutter={[16, 16]}> 
                    <div className='flex justify-between items-center w-full px-8'>
                        <h2 className='text-center font-bold text-3xl my-[1rem]'>Portfolio Data</h2>
                        <button onClick={() => setDisplayMode(!displayMode)}>
                           {!displayMode ? <LuLayoutGrid size={24}/> : <CiCircleList size={24} /> } 
                        </button>
                    </div>
                    <div className='flex space-x-2 items-center'>
                    <label className="input input-bordered flex text-black items-center bg-white gap-2 w-[300px]">
                    <input type="text" value={''} onChange={e => {}} className="grow " placeholder="Search wallet/token" />
                    <svg color='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    </div>
                    {
                        displayMode ? (
                            <div className='my-[1rem]'>
                <Row gutter={[16, 16]}>
                    {testData?.result?.slice(startIndex, endIndex).map((token, index) => (
                        <Col key={index} span={8} xs={24} sm={24} md={12}>
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                            >
                                <Meta title={`${token.symbol} - ${token.name}`} avatar={<Avatar src={token.thumbnail || token.logo} />} description={`Balance: ${token.balance_formatted}`} />
                                <Space direction="vertical" style={{ marginTop: '1em', width: '100%' }}>
                                    <Statistic title="Price (USD)" value={parseFloat(token.usd_price)} precision={6} />
                                    <Statistic title="Value (USD)" value={parseFloat(token.usd_value)} precision={2} />
                                    <Statistic
                                        title="Portfolio Percentage"
                                        value={parseFloat(token.portfolio_percentage)}
                                        precision={4}
                                        suffix="%"
                                    />
                                    <Statistic
                                        title="24hr % Change"
                                        value={parseFloat(token.usd_price_24hr_percent_change)}
                                        precision={2}
                                        suffix="%"
                                    />
                                </Space>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Pagination
                    style={{ marginTop: '16px', textAlign: 'center' }}
                    current={currentPage}
                    pageSize={pageSize}
                    total={testData?.result?.length}
                    onChange={handlePageChange}
                />
            </div>
                        ) : (
                             <Col span={24}>
                        <Table
                            dataSource={testData?.result}
                            rowKey="token_address"
                            rowClassName={getRowClassName}
                            pagination={{ pageSize: 10 }}
                            size="small"
                            style={{ maxWidth: '100%', overflowX: 'auto' }}
                        >
                            <Table.Column title="Token" dataIndex="symbol" key="symbol" />
                            <Table.Column title="Name" dataIndex="name" key="name" />
                            <Table.Column title="Balance" dataIndex="balance_formatted" key="balance" />
                            <Table.Column title="Price (USD)" dataIndex="usd_price" key="usd_price" />
                            <Table.Column title="Value (USD)" dataIndex="usd_value" key="usd_value" />
                            <Table.Column
                                title="Portfolio Percentage"
                                dataIndex="portfolio_percentage"
                                key="portfolio_percentage"
                                render={(text) => <span style={{ color: parseFloat(text) > 50 ? 'green' : 'red' }}>{text}%</span>}
                            />
                            <Table.Column
                                title="24hr % Change"
                                dataIndex="usd_price_24hr_percent_change"
                                key="usd_price_24hr_percent_change"
                                render={(text) => <span style={{ color: parseFloat(text) > 0 ? 'green' : 'red' }}>{text}%</span>}
                            />
                        </Table>
                    </Col>
                        )
                    }

                   

                </Row>
            </div>
        </div>
    );
};

export default Page;
