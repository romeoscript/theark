import React from 'react';
import { Table, Tag, Image } from 'antd';

const columns = [
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
    render: (logo) => <Image src={logo} width={30} />,
  },
  {
    title: 'Decimals',
    dataIndex: 'decimals',
    key: 'decimals',
  },
  {
    title: 'SMW Holdings (USD)',
    dataIndex: 'smw_holdings_usd',
    key: 'smw_holdings_usd',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: 'USD Price',
    dataIndex: 'usd_price',
    key: 'usd_price',
    render: (value) => (value ? `$${value.toFixed(5)}` : 'N/A'),
  },
  {
    title: 'Verified Contract',
    dataIndex: 'verified_contract',
    key: 'verified_contract',
    render: (verified) => (verified ? <Tag color="green">Yes</Tag> : <Tag color="red">No</Tag>),
  },
];

const BeautifulTable = ({ data }) => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10 }}
      scroll={{ x: 'max-content' }}
    />
  );
};

export default BeautifulTable;
