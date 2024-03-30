"use client"
import BeautifulTable from '@/components/Beautifultalbe'
import { useFetch } from '@/components/Hooks/useFetch'
import React from 'react'



const Page = () => {
    const datas = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/top-holders`)
    
    const data = datas?.data
  return (
    <div className='w-[90%] m-auto mt-[7rem]'>
        <h2 className='text-2xl text-black text-center font-bold my-[2rem]'>Top Holdings</h2>
      <BeautifulTable data={data} />
    </div>
  )
}

export default Page
