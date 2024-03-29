'use client'
import { useState, useEffect } from 'react';
import DataTable from '@/components/DataTable';
import Moralis from 'moralis';

export default function Home() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const addresses = [
                    "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
                    "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55",
                    "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d",
                    "0x67260767a04066c1259171be81265faf0d1b72d0",
                    "0x287e2c76aab4720786076c3deedd7dd386092050",
                    "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2",
                    "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346",
                    "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2",
                    "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
                ];
                 Moralis.start({
                    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjMyNWUxNzNlLTJiNzUtNGEwYy1hN2Q1LTUzYzRhYTk3OTExMiIsIm9yZ0lkIjoiMzg1Mjk5IiwidXNlcklkIjoiMzk1OTA1IiwidHlwZUlkIjoiNzU0ZTQ5NTEtMGUxZS00ZmQzLWIwZmEtOGQ5MWY2ZmM4MWE3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTE3MDgwMDUsImV4cCI6NDg2NzQ2ODAwNX0.fo-tfxq4aB9ucNl6gdcBxTbs_rQCGkKelgtSGFJtcog"
                  });
                const transactionsPromises = addresses.map(async (address) => {
                    const activeChains = await Moralis.EvmApi?.transaction.getWalletTransactions({ address });
                    return { address, activeChains };
                });
console.warn("transactionsPromises", transactionsPromises)
                const transactionsData = await Promise.all(transactionsPromises);
                setTransactions(transactionsData);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <main>
            <div className="pt-[80px] text-black">
                <figure className="p-[1rem]">
                    <p className="text-black text-4xl font-bold">Dashboard</p>
                    <DataTable file={transactions} />
                </figure>
            </div>
        </main>
    );
}
