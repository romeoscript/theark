'use client'
import { useState, useEffect } from 'react';
import DataTable from '@/components/DataTable';
import { useFetch } from '@/components/Hooks/useFetch';
import Loading from '@/components/Loading';
import { Input, Select } from 'antd';

const backendurl = process.env.NEXT_PUBLIC_API_URL;
console.log(`${backendurl}/wallets/`)

export default function Home() {
    const [transactions, setTransactions] = useState([
        {
            address: '0x73093hdfkd338204kdksfkhs',
            chain: 'ERC 20',
            hash: '0x73093hdfkd338204kdksfkhs',
            transactionType: 'Buy',
            time: (new Date())?.getYear()
        },
        {
            address: '0x73483dgdsdfkdbagdkb83',
            chain: 'BITCOIN',
            hash: '0x73483dgdsdfkdbagdkb83',
            transactionType: 'Sell',
            time: (new Date())?.getYear()
        },
    ]);

    const [searchText, setSearchText] = useState([]);
    const { data, isLoading } = useFetch(`${backendurl}/wallets/`);
    const [selectedToken, setSelectedToken] = useState('All')

    const handleSelectedToken = (value) => {
        setSelectedToken(value)
    }

    const tokens = [
        'All', 'ETH', 'BASE', 'SOLANA'
    ]

    const addresses = data?.map((item) => item.address);

    const { Search } = Input;

    if (isLoading) {
        return <Loading />
    }

    return (
        <main>
            <div className=" text-black">
                <figure className="p-[1rem] space-y-4">
                    <p className="text-black md:text-4xl text-2xl font-bold">Dashboard</p>

                    <h2 className="text-black md:text-2xl font-bold my-[1rem]">Recent Transactions</h2>
                    <p className='text-sm'>Last 7 days biggest transactions, gain valuable insights into trends, key clients, and overall financial health, empowering informed decision-making and strategic planning. Dive into the data and unlock actionable intelligence.</p>
                    <div className='flex justify-between pt-4'>
                        <div className='flex gap-4 space-x-4 bg-gray-200 rounded-lg font-semibold'>
                            {
                                tokens?.map((token, index) => (
                                    <button key={index} onClick={() => handleSelectedToken(token)} className={`${selectedToken === token ? 'bg-gradient text-white' : ''} rounded-lg px-8`}>{token}</button>
                                )) 
                            }
                        </div>
                        <div className='flex space-x-2 items-center'>
                    <label className="input input-bordered flex text-black items-center bg-white gap-2 w-[300px]">
                    <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} className="grow " placeholder="Search wallet/token" />
                    <svg color='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                        <div>
                        <Select
                            placeholder="24hr"
                            style={{
                              flex: 1,
                              width: '80px',
                              height: '50x'
                            }}
                            options={[
                              {
                                value: '24hr',
                                label: '24hr',
                              },
                              {
                                value: '6hr',
                                label: '6hr',
                              },
                              {
                                value: '12hr',
                                label: '12hr',
                              },
                            ]}
                        />
                        </div>
                        </div>
                    </div>
                    <DataTable file={transactions} />
                </figure>
            </div>
        </main>
    );
}
