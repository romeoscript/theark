"use client"
import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Space, Avatar, Pagination } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetch } from '@/components/Hooks/useFetch';
import Loading from '@/components/Loading';

const { Meta } = Card;

const PortfolioDashboard = ({ address }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const datas = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/wallet-overview/${address}`);
    const pageSize = 6;
    const isLoading = datas.isLoading
    const getRowClassName = (record) => {
        return record.possible_spam ? 'spam-row' : '';
    };
    const data = datas?.data
    const networth = data?.networth;
    const portfolioData = data ? data['portfolio-data'] : null;

    const totalPages = portfolioData ? Math.ceil(portfolioData.result.length / pageSize) : 0;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className='flex gap-4 max-md:flex-col' >

                <Col xs={24} sm={24} md={8}>
                    <Card>
                        <Statistic title="Total Networth (USD)" value={parseFloat(networth?.total_networth_usd)} precision={2} />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={16}>
                    <Card>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={portfolioData?.result}>
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
            <div className='my-[1rem]'>
                <Row gutter={[16, 16]}>
                    {portfolioData?.result?.slice(startIndex, endIndex).map((token, index) => (
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
                    total={portfolioData?.result?.length}
                    onChange={handlePageChange}
                />
            </div>
            <Row gutter={[16, 16]}>
                <h2 className='text-center font-bold text-3xl mx-auto my-[1rem]'>Portfolio Data</h2>
                <Col span={24}>
                    <Table
                        dataSource={portfolioData?.result}
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
            </Row>
        </div>
    );
};

export default PortfolioDashboard;
