"use client"
import { useFetch } from '@/components/Hooks/useFetch'
import ListingTable from '@/components/ListingTable'
import Loading from '@/components/Loading'
import React from 'react'



const Page = () => {
  const data = [
  {
    key: '1',
    token_name: 'Bitcoin',
    contract_address: '0x1234567890123456789012345678901234567890',
    usd_price: 38636.56,
    smw_holders: 4995,
    liquidity: 89,
    market_cap: 50,
  },
  {
    key: '2',
    token_name: 'Ethereum',
    contract_address: '0x0987654321098765432109876543210987654321',
    usd_price: 2646.78,
    smw_holders: 500000,
    liquidity: 138,
    market_cap: 684,
  },
  {
    key: '3',
    token_name: 'Tether',
    contract_address: '0x11223344556677889900aabbccddeeff00112233',
    usd_price: 1.00,
    smw_holders: 2000000,
    liquidity: 382,
    market_cap: 372,
  },
];
  return (
    <div className='w-[90%] m-auto '>
        <h2 className='text-2xl text-black text-start font-bold my-[2rem]'>Top Holdings</h2>
      <ListingTable data={data} />
    </div>
  )
}

export default Page
