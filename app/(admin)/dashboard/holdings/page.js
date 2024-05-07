"use client"
import BeautifulTable from '@/components/Beautifultalbe'
import { useFetch } from '@/components/Hooks/useFetch'
import Loading from '@/components/Loading'
import React from 'react'



const Page = () => {
    const datas = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/top-holdings`)
    const isLoading = datas.isLoading
    const data = datas?.data
    if (isLoading) {
      return <Loading/>
  }
  return (
    <div className='w-[90%] m-auto '>
        <h2 className='text-2xl text-black text-center font-bold my-[2rem]'>Top Holdings</h2>
      <BeautifulTable data={data} />
    </div>
  )
}

export default Page
