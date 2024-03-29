"use client"
import React, {useState} from 'react';
import { Card, Row, Col, Statistic, Table, Space, Avatar, Pagination } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Meta } = Card;

const PortfolioDashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6; 

    const getRowClassName = (record) => {
        return record.possible_spam ? 'spam-row' : '';
    };
    const data = {
        "networth": {
            "total_networth_usd": "83328.30",
            "chains": [
                {
                    "chain": "eth",
                    "native_balance": "9349423632191522464",
                    "native_balance_formatted": "9.349423632191522464",
                    "native_balance_usd": "33174.29",
                    "token_balance_usd": "50154.01",
                    "networth_usd": "83328.30"
                }
            ]
        },
        "portfolio-data": {
            "cursor": null,
            "page": 0,
            "page_size": 100,
            "result": [
                {
                    "token_address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                    "symbol": "ETH",
                    "name": "Ether",
                    "logo": "https://cdn.moralis.io/eth/0x.png",
                    "thumbnail": "https://cdn.moralis.io/eth/0x_thumb.png",
                    "decimals": 18,
                    "balance": "9349423632191522464",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "9.349423632191522464",
                    "usd_price": 3548.271500061179,
                    "usd_price_24hr_percent_change": -0.4267867533219884,
                    "usd_price_24hr_usd_change": -15.14355273416052,
                    "usd_value": 33174.29341610365,
                    "usd_value_24hr_usd_change": -141.5834898080989,
                    "native_token": true,
                    "portfolio_percentage": 0.7416
                },
                {
                    "token_address": "0xf2c7d1dc553962dfac77ab8f2210fd172f58cf02",
                    "symbol": "CA",
                    "name": "CuriosityAnon",
                    "logo": null,
                    "thumbnail": null,
                    "decimals": 18,
                    "balance": "49998304406500000000020720950",
                    "possible_spam": true,
                    "verified_contract": false,
                    "balance_formatted": "49998304406.50000000002072095",
                    "usd_price": 0.000083339495659033,
                    "usd_price_24hr_percent_change": 0,
                    "usd_price_24hr_usd_change": 0,
                    "usd_value": 4166833.4730445175,
                    "usd_value_24hr_usd_change": 0,
                    "native_token": false,
                    "portfolio_percentage": 93.1528
                },
                {
                    "token_address": "0x90148ac48dd4388a5c050d512d215d880b63da94",
                    "symbol": "Physics",
                    "name": "Physics",
                    "logo": null,
                    "thumbnail": null,
                    "decimals": 18,
                    "balance": "35987499999999999999711324865",
                    "possible_spam": true,
                    "verified_contract": false,
                    "balance_formatted": "35987499999.999999999711324865",
                    "usd_price": 0.000006195354885555,
                    "usd_price_24hr_percent_change": 0,
                    "usd_price_24hr_usd_change": 0,
                    "usd_value": 222955.33394391058,
                    "usd_value_24hr_usd_change": 0,
                    "native_token": false,
                    "portfolio_percentage": 4.9843
                },
                {
                    "token_address": "0xa0c7e61ee4faa9fcefdc8e8fc5697d54bf8c8141",
                    "symbol": "CA",
                    "name": "CuriosityAnon",
                    "logo": "https://logo.moralis.io/0x1_0xa0c7e61ee4faa9fcefdc8e8fc5697d54bf8c8141_c71b7d5015e24662ae56e635bcd3fd0d",
                    "thumbnail": "https://logo.moralis.io/0x1_0xa0c7e61ee4faa9fcefdc8e8fc5697d54bf8c8141_c71b7d5015e24662ae56e635bcd3fd0d",
                    "decimals": 18,
                    "balance": "1324000000000000000000000000",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "1324000000.0",
                    "usd_price": 0.000014040750129197,
                    "usd_price_24hr_percent_change": 56.71010055117116,
                    "usd_price_24hr_usd_change": 0.000007962523516406313,
                    "usd_value": 18589.953171056826,
                    "usd_value_24hr_usd_change": 10542.381135721958,
                    "native_token": false,
                    "portfolio_percentage": 0.4156
                },
                {
                    "token_address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
                    "symbol": "ATOR",
                    "name": "AirTor Protocol",
                    "logo": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
                    "thumbnail": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
                    "decimals": 18,
                    "balance": "3700000000000000000000",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "3700.0",
                    "usd_price": 3.333457467651178,
                    "usd_price_24hr_percent_change": 13.532101727923262,
                    "usd_price_24hr_usd_change": 0.4510868555796121,
                    "usd_value": 12333.792630309359,
                    "usd_value_24hr_usd_change": 1669.0213656445649,
                    "native_token": false,
                    "portfolio_percentage": 0.2757
                },
                {
                    "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    "symbol": "USDC",
                    "name": "USD Coin",
                    "logo": "https://logo.moralis.io/0x1_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_e6ec22e3ef954a7f9eda04f294938f4d",
                    "thumbnail": "https://logo.moralis.io/0x1_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_e6ec22e3ef954a7f9eda04f294938f4d",
                    "decimals": 6,
                    "balance": "8631114046",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "8631.114046",
                    "usd_price": 1.0001013379798387,
                    "usd_price_24hr_percent_change": 0.041059095035916364,
                    "usd_price_24hr_usd_change": 0.0004106325588166131,
                    "usd_value": 8631.988705661179,
                    "usd_value_24hr_usd_change": 3.5442164461469905,
                    "native_token": false,
                    "portfolio_percentage": 0.193
                },
                {
                    "token_address": "0x38029c62dfa30d9fd3cadf4c64e9b2ab21dbda17",
                    "symbol": "Dubbz",
                    "name": "Dubbz",
                    "logo": "https://logo.moralis.io/0x1_0x38029c62dfa30d9fd3cadf4c64e9b2ab21dbda17_66bf2355db5d4c9995faff193e86ff78",
                    "thumbnail": "https://logo.moralis.io/0x1_0x38029c62dfa30d9fd3cadf4c64e9b2ab21dbda17_66bf2355db5d4c9995faff193e86ff78",
                    "decimals": 18,
                    "balance": "2127915738728737417331",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "2127.915738728737417331",
                    "usd_price": 3.1417366116831693,
                    "usd_price_24hr_percent_change": 5.814702210933908,
                    "usd_price_24hr_usd_change": 0.1826826282212613,
                    "usd_value": 6685.350782940912,
                    "usd_value_24hr_usd_change": 388.7332397843525,
                    "native_token": false,
                    "portfolio_percentage": 0.1495
                },
                {
                    "token_address": "0x426aedbed16726e3f220cb4fed4d4060b95cca46",
                    "symbol": "BAHAMAS",
                    "name": "Bahamas",
                    "logo": "https://logo.moralis.io/0x1_0x426aedbed16726e3f220cb4fed4d4060b95cca46_36ef2d9b7511444bb4bb83e3c0ddbed7",
                    "thumbnail": "https://logo.moralis.io/0x1_0x426aedbed16726e3f220cb4fed4d4060b95cca46_36ef2d9b7511444bb4bb83e3c0ddbed7",
                    "decimals": 18,
                    "balance": "516000000000000000000000000",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "516000000.0",
                    "usd_price": 0.000005761423815934,
                    "usd_price_24hr_percent_change": 27.245728100154793,
                    "usd_price_24hr_usd_change": 0.0000015697418675869402,
                    "usd_value": 2972.894689021944,
                    "usd_value_24hr_usd_change": 809.9868036748612,
                    "native_token": false,
                    "portfolio_percentage": 0.0665
                },
                {
                    "token_address": "0x17c50d62e6e8d20d2dc18e9ad79c43263d0720d9",
                    "symbol": "NFAi",
                    "name": "Not Financial Advice",
                    "logo": "https://logo.moralis.io/0x1_0x17c50d62e6e8d20d2dc18e9ad79c43263d0720d9_4162a806914749b0940cec24ba0e7511",
                    "thumbnail": "https://logo.moralis.io/0x1_0x17c50d62e6e8d20d2dc18e9ad79c43263d0720d9_4162a806914749b0940cec24ba0e7511",
                    "decimals": 18,
                    "balance": "38520001000000000000000",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "38520.001",
                    "usd_price": 0.02430885537625184,
                    "usd_price_24hr_percent_change": -4.199110813476048,
                    "usd_price_24hr_usd_change": -0.0010207557747364448,
                    "usd_value": 936.3771334020762,
                    "usd_value_24hr_usd_change": -39.31951346360363,
                    "native_token": false,
                    "portfolio_percentage": 0.0209
                },
                {
                    "token_address": "0x138c2f1123cf3f82e4596d097c118eac6684940b",
                    "symbol": "ALPHA",
                    "name": "Alpha",
                    "logo": "https://logo.moralis.io/0x1_0x138c2f1123cf3f82e4596d097c118eac6684940b_63b5b53d9f264a51b4f4668b1f0bbb67",
                    "thumbnail": "https://logo.moralis.io/0x1_0x138c2f1123cf3f82e4596d097c118eac6684940b_63b5b53d9f264a51b4f4668b1f0bbb67",
                    "decimals": 18,
                    "balance": "960000000000000000000",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "960.0",
                    "usd_price": 0.00376740920325,
                    "usd_price_24hr_percent_change": 0,
                    "usd_price_24hr_usd_change": 0,
                    "usd_value": 3.61671283512,
                    "usd_value_24hr_usd_change": 0,
                    "native_token": false,
                    "portfolio_percentage": 0.0001
                },
                {
                    "token_address": "0x562e362876c8aee4744fc2c6aac8394c312d215d",
                    "symbol": "OPTIMUS",
                    "name": "Optimus",
                    "logo": "https://logo.moralis.io/0x1_0x562e362876c8aee4744fc2c6aac8394c312d215d_b961dc09d7894ffa8ff19fe2851f82b1",
                    "thumbnail": "https://logo.moralis.io/0x1_0x562e362876c8aee4744fc2c6aac8394c312d215d_b961dc09d7894ffa8ff19fe2851f82b1",
                    "decimals": 9,
                    "balance": "100000000",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "0.1",
                    "usd_price": 0.3251167363697609,
                    "usd_price_24hr_percent_change": 16.904395818720193,
                    "usd_price_24hr_usd_change": 0.05495901998884942,
                    "usd_value": 0.032511673636976095,
                    "usd_value_24hr_usd_change": 0.005495901998884943,
                    "native_token": false,
                    "portfolio_percentage": 0
                },
                {
                    "token_address": "0x5c99a6c14f8dc0c2c3655c64a2cef68ff9f771ba",
                    "symbol": "LARRY",
                    "name": "Llama",
                    "logo": "https://logo.moralis.io/0x1_0x5c99a6c14f8dc0c2c3655c64a2cef68ff9f771ba_e0c23f2aed054be3aaabac61d0193e2b",
                    "thumbnail": "https://logo.moralis.io/0x1_0x5c99a6c14f8dc0c2c3655c64a2cef68ff9f771ba_e0c23f2aed054be3aaabac61d0193e2b",
                    "decimals": 18,
                    "balance": "10",
                    "possible_spam": false,
                    "verified_contract": true,
                    "balance_formatted": "0.00000000000000001",
                    "usd_price": 3.311117344e-9,
                    "usd_price_24hr_percent_change": -7.020294320284326,
                    "usd_price_24hr_usd_change": -2.3245018283878122e-10,
                    "usd_value": 3.311117344e-26,
                    "usd_value_24hr_usd_change": -2.3245018283878123e-27,
                    "native_token": false,
                    "portfolio_percentage": 0
                },
                {
                    "token_address": "0xbf2d68bd2f03c90dd2f373c7cec3b1e956a5c8f8",
                    "symbol": "UNI-V2",
                    "name": "Uniswap V2",
                    "logo": null,
                    "thumbnail": null,
                    "decimals": 18,
                    "balance": "50000029488391156000",
                    "possible_spam": false,
                    "verified_contract": false,
                    "balance_formatted": "50.000029488391156",
                    "usd_price": null,
                    "usd_price_24hr_percent_change": null,
                    "usd_price_24hr_usd_change": null,
                    "usd_value": null,
                    "usd_value_24hr_usd_change": null,
                    "native_token": false,
                    "portfolio_percentage": 0
                },
                {
                    "token_address": "0xb4d44cd0d48c5dba1893f4d2a48c496dbcc6fea2",
                    "symbol": "$ATOR Rewards By https://atorlab.xyz",
                    "name": "! atorlab.xyz",
                    "logo": null,
                    "thumbnail": null,
                    "decimals": 0,
                    "balance": "305000",
                    "possible_spam": true,
                    "verified_contract": false,
                    "balance_formatted": "305000",
                    "usd_price": null,
                    "usd_price_24hr_percent_change": null,
                    "usd_price_24hr_usd_change": null,
                    "usd_value": null,
                    "usd_value_24hr_usd_change": null,
                    "native_token": false,
                    "portfolio_percentage": 0
                },
                {
                    "token_address": "0x6284c089d6944df1ba61bd56618aeba07d1d6136",
                    "symbol": "Visit aeth.network to claim rewards",
                    "name": "# aeth.network",
                    "logo": null,
                    "thumbnail": null,
                    "decimals": 6,
                    "balance": "1400000",
                    "possible_spam": true,
                    "verified_contract": false,
                    "balance_formatted": "1.4",
                    "usd_price": null,
                    "usd_price_24hr_percent_change": null,
                    "usd_price_24hr_usd_change": null,
                    "usd_value": null,
                    "usd_value_24hr_usd_change": null,
                    "native_token": false,
                    "portfolio_percentage": 0
                },
                {
                    "token_address": "0x29d4885c4c5b1c4554cbbea215ca8feec1216b8a",
                    "symbol": "OPTI-XC",
                    "name": "OPTI-XC",
                    "logo": null,
                    "thumbnail": null,
                    "decimals": 9,
                    "balance": "207986558486605",
                    "possible_spam": false,
                    "verified_contract": false,
                    "balance_formatted": "207986.558486605",
                    "usd_price": null,
                    "usd_price_24hr_percent_change": null,
                    "usd_price_24hr_usd_change": null,
                    "usd_value": null,
                    "usd_value_24hr_usd_change": null,
                    "native_token": false,
                    "portfolio_percentage": 0
                }
            ]
        }
    }
    const networth = data.networth;
    const portfolioData = data['portfolio-data'];

    const totalPages = Math.ceil(portfolioData.result.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card>
                        <Statistic title="Total Networth (USD)" value={parseFloat(networth.total_networth_usd)} precision={2} />
                    </Card>
                </Col>
                <Col span={16}>
                    <Card>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={portfolioData.result}>
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
            </Row>
            <div className='my-[1rem]'>
                <Row gutter={[16, 16]}>
                    {portfolioData.result.slice(startIndex, endIndex).map((token, index) => (
                        <Col key={index} span={8}>
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
                total={portfolioData.result.length}
                onChange={handlePageChange}
            />
            </div>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Table
                        dataSource={portfolioData.result}
                        rowKey="token_address"
                        rowClassName={getRowClassName}
                        pagination={{ pageSize: 10 }}
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
