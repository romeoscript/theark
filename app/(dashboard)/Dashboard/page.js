'use client'
import { useState, useEffect } from 'react';
import DataTable from '@/components/DataTable';
import Moralis from 'moralis';
import { useFetch } from '@/components/Hooks/useFetch';

const backendurl  = process.env.NEXT_PUBLIC_API_URL;
console.log(`${backendurl}/wallets/`)

export default function Home() {
    const [transactions, setTransactions] = useState([]);
    const {data} = useFetch(`${backendurl}/wallets/`);

  const addresses = data?.map((item) => item.address);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
               
                 Moralis.start({
                    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjMyNWUxNzNlLTJiNzUtNGEwYy1hN2Q1LTUzYzRhYTk3OTExMiIsIm9yZ0lkIjoiMzg1Mjk5IiwidXNlcklkIjoiMzk1OTA1IiwidHlwZUlkIjoiNzU0ZTQ5NTEtMGUxZS00ZmQzLWIwZmEtOGQ5MWY2ZmM4MWE3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTE3MDgwMDUsImV4cCI6NDg2NzQ2ODAwNX0.fo-tfxq4aB9ucNl6gdcBxTbs_rQCGkKelgtSGFJtcog"
                  });
                  if (addresses) {
                    const transactionsPromises = addresses.map(async (address) => {
                        const activeChains = await Moralis.EvmApi?.transaction.getWalletTransactions({ address });
                        return { address, activeChains };
                    });

                    const transactionsData = await Promise.all(transactionsPromises);
                    setTransactions(transactionsData);
                }
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };
        fetchTransactions();
    }, [addresses]);

    return (
        <main>
            <div className="pt-[80px] text-black">
                <figure className="p-[1rem]">
                    <p className="text-black text-4xl font-bold">Dashboard</p>

                    <h2 className="text-black text-2xl font-bold my-[1rem]">Transactions</h2>
                     <p>Last 7 days biggest transactions, gain valuable insights into trends, key clients, and overall financial health, empowering informed decision-making and strategic planning. Dive into the data and unlock actionable intelligence.</p>
                    <DataTable file={transactions} />
                </figure>
            </div>
        </main>
    );
}
