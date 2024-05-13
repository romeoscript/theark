"use client"
import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Space, Avatar, Pagination } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetch } from '@/components/Hooks/useFetch';
import Loading from '@/components/Loading';
import { LuLayoutGrid } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";

const { Meta } = Card;

const PortfolioDashboard = ({ address }) => {
    const [displayMode, setDisplayMode] = useState(0) // 0 -> Grid & 1 -> Row
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio-holdings/${address}`);
    const pageSize = 6;
    const getRowClassName = (record) => {
        return record.possible_spam ? 'spam-row' : '';
    };

    const totalPages = data ? Math.ceil(data.data.length / pageSize) : 0;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    if (isLoading) {
        return <Loading />
    }

    const chartData = data?.data?.map((item) => ({
        symbol: item?.attributes?.fungible_info?.symbol,
        float: item?.attributes?.quantity?.float
    }))

    return (
        <div>
            <div className='flex gap-4' >
                <Col xs={24} sm={24} md={8}>
                    <Card>
                        <Statistic title="Total Networth (USD)" value={384932.49293} precision={2} />
                    </Card>
                </Col>
            </div>
            <div className='my-10 w-full flex justify-center items-center'>
            <Col xs={24} sm={24} md={16}>
                    <Card>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="symbol" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="float" name="Price (USD)" stroke="#8884d8" />
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
                    {data?.data?.slice(startIndex, endIndex).map((token, index) => (
                        <Col key={index} span={8} xs={24} sm={24} md={12}>
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                            >
                                <Meta title={`${token.attributes?.fungible_info?.symbol} - ${token.attributes?.fungible_info?.name}`} avatar={<Avatar src={token.thumbnail || token.logo} />} />
                                <Space direction="vertical" style={{ marginTop: '1em', width: '100%' }}>
                                    <Statistic title="Price (USD)" value={parseFloat(token?.attributes?.price)} precision={6} />
                                    <Statistic title="Value (USD)" value={parseFloat(token?.attributes?.value)} precision={2} />
                                    <Statistic
                                        title="Portfolio Percentage"
                                        value={parseFloat(token?.attributes?.quantity?.decimals)}
                                        precision={4}
                                        suffix="%"
                                    />
                                    <Statistic
                                        title="24hr % Change"
                                        value={parseFloat(token?.attributes?.quantity?.decimalse)}
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
                            dataSource={data?.data}
                            rowKey="token_address"
                            rowClassName={getRowClassName}
                            pagination={{ pageSize: 10 }}
                            size="small"
                            style={{ maxWidth: '100%', overflowX: 'auto' }}
                        >price
                            <Table.Column title="Token" render={(text, record) => <span>{record?.attributes?.fungible_info?.symbol}</span>} />
                            <Table.Column title="Name" render={(text, record) =>   <span>{record?.attributes?.fungible_info?.name}</span> }/>
                            <Table.Column title="Price (USD)" render={(text, record) => <span>{record?.attributes?.price}</span>}/>
                            <Table.Column title="Value (USD)" render={(text, record) => <span>{record?.attributes?.value}</span> }/>
                            <Table.Column
                                title="Portfolio Percentage"
                                dataIndex="portfolio_percentage"
                                key="portfolio_percentage"
                                render={(text, record) => <span style={{ color: parseFloat(text) > 50 ? 'green' : 'red' }}>{record?.attributes?.quantity?.decimals}%</span>}
                            />
                            <Table.Column
                                title="24hr % Change"
                                dataIndex="usd_price_24hr_percent_change"
                                key="usd_price_24hr_percent_change"
                                render={(text, record) => <span style={{ color: parseFloat(text) > 0 ? 'green' : 'red' }}>{record?.attributes?.quantity?.decimals}%</span>}
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

export default PortfolioDashboard;
