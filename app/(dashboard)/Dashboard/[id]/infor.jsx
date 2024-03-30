"use client";
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import BuyandSell from '@/components/BuyandSell';
import { useFetch } from '@/components/Hooks/useFetch';


const Infor = ({ address }) => {
    const datas = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/monitor_wallet/${address}`);
    const buysChartContainer = useRef(null);
    const sellsChartContainer = useRef(null);
    const buysChartInstance = useRef(null);
    const sellsChartInstance = useRef(null);

const data = datas?.data;
    useEffect(() => {
        if (buysChartContainer.current && sellsChartContainer.current) {
            if (buysChartInstance.current) {
                buysChartInstance.current.destroy();
            }
            if (sellsChartInstance.current) {
                sellsChartInstance.current.destroy();
            }

            const buys = data?.buys;
            const sells = data?.sells;

            const buyLabels = [...new Set(buys?.map(buy => buy.token_symbol))];
            const sellLabels = [...new Set(sells?.map(sell => sell.token_symbol))];

            const buyData = buyLabels.map(label => {
                const totalBuyAmount = buys.filter(buy => buy.token_symbol === label).reduce((acc, buy) => acc + parseFloat(buy.value_decimal), 0);
                return totalBuyAmount;
            });
            const sellData = sellLabels.map(label => {
                const totalSellAmount = sells.filter(sell => sell.token_symbol === label).reduce((acc, sell) => acc + parseFloat(sell.value_decimal), 0);
                return totalSellAmount;
            });

            const buysCtx = buysChartContainer.current.getContext('2d');
            const sellsCtx = sellsChartContainer.current.getContext('2d');

            const buyColors = generateRandomColors(buyLabels.length);
            const sellColors = generateRandomColors(sellLabels.length);

            buysChartInstance.current = new Chart(buysCtx, {
                type: 'pie',
                data: {
                    labels: buyLabels,
                    datasets: [{
                        label: 'Total Buys',
                        data: buyData,
                        backgroundColor: buyColors,
                        borderColor: 'rgba(255, 255, 255, 1)',
                        borderWidth: 1,
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            sellsChartInstance.current = new Chart(sellsCtx, {
                type: 'pie',
                data: {
                    labels: sellLabels,
                    datasets: [{
                        label: 'Total Sells',
                        data: sellData,
                        backgroundColor: sellColors,
                        borderColor: 'rgba(255, 255, 255, 1)',
                        borderWidth: 1,
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    }, [data]);

    const generateRandomColors = (numColors) => {
        const colors = [];
        for (let i = 0; i < numColors; i++) {
            const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;
            colors.push(randomColor);
        }
        return colors;
    };

    return <div>
        <div className='mt-[3rem] h-[500px] w-4/5 m-auto gap-4 justify-between flex text-black '>

            <div className='basis-[45%]'>
                <p className='text-xl'>Total Buys</p>
                <canvas ref={buysChartContainer} />
            </div>
            <div className='basis-[45%]'>
                <p className='text-xl'>Total Sells</p>
                <canvas ref={sellsChartContainer} />
            </div>

        </div>
        <BuyandSell data={data} />
    </div>
};

export default Infor;
